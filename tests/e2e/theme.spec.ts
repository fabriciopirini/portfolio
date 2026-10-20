import { expect, test, type Page } from '@playwright/test'

const darkBackground = 'rgb(18, 19, 17)'
const lightBackground = 'rgb(250, 248, 243)'

const background = (page: Page) => page.locator('.ledger-page').evaluate((el) => getComputedStyle(el).backgroundColor)

for (const path of ['/', '/resume']) {
  test(`${path} follows the system until the toggle picks, and the pick survives a reload`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto(path)
    const toggle = page.getByRole('button', { name: 'Dark theme' })
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
    expect(await background(page)).toBe(darkBackground)

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
    expect(await background(page)).toBe(lightBackground)

    // No flash: record the background the moment the page's content exists, before it can paint.
    await page.addInitScript(() => {
      new MutationObserver((_, observer) => {
        const ledger = document.querySelector('.ledger-page')
        if (!ledger) return
        Reflect.set(window, 'firstBackground', getComputedStyle(ledger).backgroundColor)
        observer.disconnect()
      }).observe(document, { childList: true, subtree: true })
    })
    await page.reload()
    expect(await page.evaluate(() => Reflect.get(window, 'firstBackground'))).toBe(lightBackground)
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto(path)
    expect(await background(page)).toBe(darkBackground)
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })
}

test('a dark pick still prints light', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Dark theme' }).click()
  expect(await background(page)).toBe(darkBackground)

  await page.emulateMedia({ media: 'print' })
  expect(await page.locator('.ledger-page').evaluate((el) => getComputedStyle(el).color)).toBe('rgb(28, 27, 25)')
})
