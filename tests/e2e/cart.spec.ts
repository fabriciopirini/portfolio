import { test, expect } from '@playwright/test'

test.describe('Cart Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/shop')
    // Wait for products to load
    await page.waitForSelector('text=Fab coins')
  })

  test('add product to cart increments cart count', async ({ page }) => {
    // Get initial cart count
    const cartBadge = page.locator('[class*="absolute"][class*="bg-accent"]').first()
    await expect(cartBadge).toHaveText('0')

    // Click add to cart on first product
    const addToCartButton = page.getByRole('button', { name: /add to cart/i }).first()
    await addToCartButton.click()

    // Verify cart count incremented
    await expect(cartBadge).toHaveText('1')
  })

  test('cart button shows check mark when product is in cart', async ({ page }) => {
    // Add product to cart
    const addToCartButton = page.getByRole('button', { name: /add to cart/i }).first()
    await addToCartButton.click()

    // Check that button text changed to "Remove" or shows a check mark
    const productCard = page.locator('[class*="group"]').filter({ hasText: 'Fab coins' }).first()
    await expect(productCard.getByRole('button', { name: /remove/i })).toBeVisible()
  })

  test('open basket drawer shows cart items', async ({ page }) => {
    // Add a product first
    const addToCartButton = page.getByRole('button', { name: /add to cart/i }).first()
    await addToCartButton.click()

    // Click cart icon to open drawer
    const cartButton = page.getByRole('button', { name: /open cart/i })
    await cartButton.click()

    // Verify drawer opened with heading
    await expect(page.getByRole('heading', { name: /your basket/i })).toBeVisible()
  })

  test('cart drawer displays added product with name and price', async ({ page }) => {
    // Add a product
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()

    // Open cart drawer
    await page.getByRole('button', { name: /open cart/i }).click()

    // Wait for drawer to be visible
    await expect(page.getByRole('heading', { name: /your basket/i })).toBeVisible()

    // Wait a bit for drawer animation to complete
    await page.waitForTimeout(500)

    // Verify product info is displayed (should have "Fab coins" and price)
    await expect(page.getByText(/fab coins/i).last()).toBeVisible()
    await expect(page.getByText(/F\$ \d+/)).toBeVisible()
  })

  test('remove product decrements cart count', async ({ page }) => {
    // Add a product
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()

    const cartBadge = page.locator('[class*="absolute"][class*="bg-accent"]').first()
    await expect(cartBadge).toHaveText('1')

    // Remove the product
    const removeButton = page.getByRole('button', { name: /remove/i }).first()
    await removeButton.click()

    // Verify cart count decremented
    await expect(cartBadge).toHaveText('0')
  })

  test('empty cart state shows message', async ({ page }) => {
    // Open cart drawer without adding anything
    const cartButton = page.getByRole('button', { name: /open cart/i })
    await cartButton.click()

    // Verify empty state message
    await expect(page.getByText(/your basket is empty/i)).toBeVisible()
  })

  test('cart persistence after page reload', async ({ page }) => {
    // Add a product
    await page
      .getByRole('button', { name: /add to cart/i })
      .first()
      .click()

    const cartBadge = page.locator('[class*="absolute"][class*="bg-accent"]').first()
    await expect(cartBadge).toHaveText('1')

    // Reload the page
    await page.reload()
    await page.waitForSelector('text=Fab coins')

    // Verify cart count persisted
    await expect(cartBadge).toHaveText('1')
  })
})
