import { test, expect } from '@playwright/test'

test.describe('Quiet Ledger homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows the name, the role, and the current client', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Fabricio Pirini', level: 1 })).toBeVisible()
    await expect(page.getByText('Senior Frontend Engineer building fintech products for web and mobile.')).toBeVisible()
    await expect(page.getByText('Building since 2017')).toBeVisible()
    await expect(page.getByText(/pre-launch US consumer fintech/i).first()).toBeVisible()
    await expect(page.getByRole('heading', { name: /technology/i })).toHaveCount(0)
    await expect(page.getByRole('link', { name: 'Shop' })).toHaveCount(0)
    await expect(page.getByText(/years of experience/i)).toHaveCount(0)
    await expect(page.getByText(/Currently at Kraken/)).toHaveCount(0)
  })

  test('puts the chat line next to the contact links', async ({ page }) => {
    await expect(page.getByText("Building something in fintech? I'm happy to chat.")).toHaveCount(2)

    const email = page.getByRole('link', { name: 'fabricio@fabriciopirini.com' }).first()
    const resume = page.getByRole('link', { name: 'Résumé' }).first()
    await expect(email).toHaveAttribute('href', 'mailto:fabricio@fabriciopirini.com')
    await expect(resume).toHaveAttribute('href', '/resume')
    await expect(page.getByRole('link', { name: 'LinkedIn' }).first()).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/fabriciopirini/'
    )
    await expect(page.getByRole('link', { name: 'GitHub' }).first()).toHaveAttribute(
      'href',
      'https://github.com/fabriciopirini'
    )
  })

  test('states the cleared Kraken proof and the Sportradar figure', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /financial data tables, visual regression tests/i })).toBeVisible()
    await expect(page.getByText('15+ financial data tables')).toBeVisible()
    await expect(page.getByText('25+ accessibility issues')).toBeVisible()
    await expect(page.getByText(/cutting runtime by 120x and resource usage by 10x/)).toBeVisible()
  })

  test('skip link moves to selected work', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: 'Skip to selected work' })
    await page.keyboard.press('Tab')
    await expect(skipLink).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/#work$/)
    await expect(page.locator('#work')).toBeFocused()
  })

  test('keyboard focus visits the contact links in order', async ({ page }) => {
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'fabricio@fabriciopirini.com' }).first()).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Résumé' }).first()).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'LinkedIn' }).first()).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'GitHub' }).first()).toBeFocused()
  })
})
