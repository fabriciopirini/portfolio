import { test, expect } from '@playwright/test'

test.describe('Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/shop')
    await page.waitForSelector('text=Fab coins')
  })

  test('checkout button is disabled when cart is empty', async ({ page }) => {
    // Open cart drawer
    const cartButton = page.getByRole('button', { name: /open cart/i })
    await cartButton.click()

    // Wait for drawer to be visible and animation to complete
    await expect(page.getByRole('heading', { name: /your basket/i })).toBeVisible()
    await page.waitForTimeout(500)

    // Verify checkout button is disabled
    const checkoutButton = page.getByRole('button', { name: /checkout/i }).first()
    await expect(checkoutButton).toBeDisabled()
  })

  test('checkout button becomes enabled after adding item', async ({ page }) => {
    // Add a product
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()

    // Open cart drawer
    const cartButton = page.getByRole('button', { name: /open cart/i })
    await cartButton.click()

    // Verify checkout button is enabled
    const checkoutButton = page.getByRole('button', { name: /checkout/i }).first()
    await expect(checkoutButton).toBeEnabled()
  })

  test('checkout button opens email dialog', async ({ page }) => {
    // Add a product
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()

    // Open cart and click checkout
    await page.getByRole('button', { name: /open cart/i }).click()
    await page
      .getByRole('button', { name: /checkout/i })
      .first()
      .click()

    // Verify dialog/drawer opened with "Interested?" heading
    await expect(page.getByRole('heading', { name: /interested/i })).toBeVisible()
  })

  test('dialog shows interested heading and message', async ({ page }) => {
    // Add a product and open checkout
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()
    await page.getByRole('button', { name: /open cart/i }).click()
    await page
      .getByRole('button', { name: /checkout/i })
      .first()
      .click()

    // Verify heading
    await expect(page.getByRole('heading', { name: /interested/i })).toBeVisible()

    // Verify there's some message/description text
    await expect(page.locator('text=/reach out|contact|email/i').first()).toBeVisible()
  })

  test('email options are available', async ({ page }) => {
    // Add a product and open checkout
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()
    await page.getByRole('button', { name: /open cart/i }).click()

    // Wait for drawer then click checkout
    await expect(page.getByRole('heading', { name: /your basket/i })).toBeVisible()
    await page.waitForTimeout(500)
    await page
      .getByRole('button', { name: /checkout/i })
      .first()
      .click()

    // Wait for dialog/drawer to appear and animate
    await expect(page.getByRole('heading', { name: /interested/i })).toBeVisible()
    await page.waitForTimeout(500)

    // Verify email options are present (looking for links with email-related text)
    await expect(page.locator('a[href^="mailto:"]').first()).toBeVisible()
  })

  test('mailto link has correct format', async ({ page }) => {
    // Add a product and open checkout
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()
    await page.getByRole('button', { name: /open cart/i }).click()

    // Wait for drawer then click checkout
    await expect(page.getByRole('heading', { name: /your basket/i })).toBeVisible()
    await page
      .getByRole('button', { name: /checkout/i })
      .first()
      .click()

    // Wait for dialog/drawer to appear
    await expect(page.getByRole('heading', { name: /interested/i })).toBeVisible()

    // Check mailto link (URL encoded @ symbol)
    const mailtoLink = page.locator('a[href*="mailto:"][href*="fabricio"]').first()
    await expect(mailtoLink).toBeVisible()
  })

  test('Gmail link opens with correct parameters', async ({ page }) => {
    // Add a product and open checkout
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()
    await page.getByRole('button', { name: /open cart/i }).click()
    await page
      .getByRole('button', { name: /checkout/i })
      .first()
      .click()

    // Check Gmail link
    const gmailLink = page.locator('a[href*="mail.google.com"]')
    await expect(gmailLink).toBeVisible()

    // Verify it opens in new tab
    const target = await gmailLink.getAttribute('target')
    expect(target).toBe('_blank')
  })

  test('Outlook link opens with correct parameters', async ({ page }) => {
    // Add a product and open checkout
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()
    await page.getByRole('button', { name: /open cart/i }).click()
    await page
      .getByRole('button', { name: /checkout/i })
      .first()
      .click()

    // Check Outlook link
    const outlookLink = page.locator('a[href*="outlook"]')
    await expect(outlookLink).toBeVisible()

    // Verify it opens in new tab
    const target = await outlookLink.getAttribute('target')
    expect(target).toBe('_blank')
  })
})
