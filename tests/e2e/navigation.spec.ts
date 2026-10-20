import { test, expect } from '@playwright/test'

declare global {
  interface Window {
    morphs?: Promise<(string | null)[] | 'skipped'> | null
  }
}

// Records what the incoming page's cross-document view transition animates, or null when there is none.
// pagereveal fires at the first frame, which can come after the heading is already in the DOM, so tests poll.
const recordTransition = () => {
  if (typeof PageRevealEvent === 'undefined') return void (window.morphs = null)
  addEventListener('pagereveal', (event: PageRevealEvent) => {
    const transition = event.viewTransition
    window.morphs = transition
      ? transition.ready.then(
          () => document.getAnimations().map((animation) => (animation.effect as KeyframeEffect).pseudoElement),
          () => 'skipped'
        )
      : null
  })
}

test.describe('home and résumé navigation', () => {
  test('the Résumé link grows into the résumé heading, and back', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Firefox has no cross-document view transitions yet')
    await page.addInitScript(recordTransition)
    await page.goto('/')

    await page.getByRole('link', { name: 'Résumé' }).first().click()
    await expect(page.getByRole('heading', { name: 'Résumé', level: 1 })).toBeVisible()
    await expect.poll(() => page.evaluate(() => window.morphs)).toContain('::view-transition-group(resume-title)')

    await page.getByRole('link', { name: 'Home' }).click()
    await expect(page.getByRole('heading', { name: 'Fabricio Pirini', level: 1 })).toBeVisible()
    await expect.poll(() => page.evaluate(() => window.morphs)).toContain('::view-transition-group(resume-title)')
  })

  test('reduced motion just navigates', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.addInitScript(recordTransition)
    await page.goto('/')

    await page.getByRole('link', { name: 'Résumé' }).first().click()
    await expect(page.getByRole('heading', { name: 'Résumé', level: 1 })).toBeVisible()
    await expect.poll(() => page.evaluate(() => window.morphs)).toBeNull()
  })

  // Playwright cannot prerender (Chromium allows it only through tab-level DevTools sessions), so this fakes one.
  test("a prerendered page loads Vercel's scripts only once it is shown", async ({ page }) => {
    await page.addInitScript(() => Object.defineProperty(document, 'prerendering', { configurable: true, value: true }))
    await page.goto('/resume')
    const vercel = page.locator('script[src^="/_vercel/"]')
    await expect(vercel).toHaveCount(0)

    await page.evaluate(() => {
      Object.defineProperty(document, 'prerendering', { value: false })
      document.dispatchEvent(new Event('prerenderingchange'))
    })
    await expect(vercel).toHaveCount(2)
  })
})
