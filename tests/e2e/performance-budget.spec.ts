import { expect, test, type Response } from '@playwright/test'

import { themeScript } from '@/app/theme-toggle'

// Uncompressed bytes of every response during a cold load: the production build's measurement plus about 5%.
// Raise a budget only with a reason in the pull request.
// `/` and `/resume` ship no framework JavaScript (Pages Router, `unstable_runtimeJS: false`); the App Router's 404 does.
const routes = [
  { path: '/', maxBytes: 21_300, runtime: false },
  { path: '/resume', maxBytes: 37_556, runtime: false },
  { path: '/does-not-exist', maxBytes: 585_000, runtime: true },
]

test.skip(
  ({ browserName }) => browserName !== 'chromium',
  'byte counts differ by engine, so budgets are measured in Chromium'
)

for (const { path, maxBytes, runtime } of routes) {
  test(`${path} first view stays lean`, async ({ page, baseURL }) => {
    const responses: Response[] = []
    page.on('response', (response) => responses.push(response))
    const document = await page.goto(path, { waitUntil: 'load' })

    const origin = new URL(baseURL!).origin
    expect(responses.map((response) => response.url()).filter((url) => new URL(url).origin !== origin)).toEqual([])
    await expect(page.locator('link[rel="stylesheet"]')).toHaveCount(0)
    // Modern browsers skip the nomodule polyfill, so it never blocks the first paint.
    await expect(page.locator('head script[src]:not([async]):not([defer]):not([nomodule])')).toHaveCount(0)

    const fontUrls = responses.filter((r) => r.request().resourceType() === 'font').map((r) => r.url())
    expect(fontUrls).toEqual([])
    expect(document!.headers().link ?? '').not.toMatch(/as="?font/)
    await expect(page.locator('link[rel="preload"][as="font"]')).toHaveCount(0)

    // The flag fails silently, by shipping the runtime again, so check what it is supposed to remove.
    // Inline, only the theme script (which has to run before the first paint) and the loader for Vercel's two scripts.
    if (!runtime) {
      const scripts = await page.locator('script[src]').evaluateAll((els) => els.map((el) => el.getAttribute('src')))
      expect(scripts).toEqual(['/_vercel/insights/script.js', '/_vercel/speed-insights/script.js'])
      const inline = await page
        .locator('script:not([src])')
        .evaluateAll((els: HTMLScriptElement[]) =>
          els.filter((el) => !el.type || /javascript|module/.test(el.type)).map((el) => el.textContent)
        )
      expect(inline).toEqual([themeScript, expect.stringContaining("'/_vercel/insights/script.js'")])
      expect(await document!.text()).not.toMatch(/__next_f|__NEXT_DATA__/)
    }

    let bytes = 0
    for (const response of responses) bytes += (await response.body()).length
    expect(bytes, `${path} transferred ${bytes} bytes uncompressed`).toBeLessThanOrEqual(maxBytes)
  })
}

test('agents get markdown, describedby links, and content signals', async ({ request }) => {
  for (const path of ['/', '/resume']) {
    const markdown = await request.get(path, { headers: { accept: 'text/markdown' } })
    expect(markdown.status()).toBe(200)
    expect(markdown.headers()['content-type']).toBe('text/markdown')
    expect(markdown.headers()['x-markdown-tokens']).toMatch(/^\d+$/)
    const vary = markdown
      .headersArray()
      .filter(({ name }) => name.toLowerCase() === 'vary')
      .flatMap(({ value }) => value.split(',').map((field) => field.trim().toLowerCase()))
    expect(vary).toContain('accept')
  }
  expect((await request.get('/resume/unknown', { headers: { accept: 'text/markdown' } })).status()).toBe(404)
  // The résumé's markdown is the whole document, down to the last role and education.
  const resume = await (await request.get('/resume', { headers: { accept: 'text/markdown' } })).text()
  expect(resume).toContain('Software Engineering Intern')
  expect(resume).toContain('Bachelor of Computer Engineering')

  const home = await request.get('/')
  expect(home.headers()['content-type']).toContain('text/html')
  expect(home.headers().link).toContain('</llms.txt>; rel="describedby"')
  expect(home.headers().link).toContain('</resume>; rel="describedby"')

  expect(await (await request.get('/robots.txt')).text()).toContain(
    '# Content-Signal: ai-train=no, search=yes, ai-input=yes'
  )
})
