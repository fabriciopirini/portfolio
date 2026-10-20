import { expect, test, type Response } from '@playwright/test'

// Uncompressed bytes of every response during a cold load: the production build's measurement plus about 5%.
// Raise a budget only with a reason in the pull request.
const routes = [
  { path: '/', maxBytes: 600_000 },
  { path: '/resume', maxBytes: 580_000 },
  { path: '/does-not-exist', maxBytes: 585_000 },
]

test.skip(
  ({ browserName }) => browserName !== 'chromium',
  'byte counts differ by engine, so budgets are measured in Chromium'
)

for (const { path, maxBytes } of routes) {
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
