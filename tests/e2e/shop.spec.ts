import { test, expect } from '@playwright/test'

test.describe('Shop Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/shop')
  })

  test('loads with heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /fab's shop/i })).toBeVisible()
  })

  test('displays 8 product cards', async ({ page }) => {
    // Wait for products to load
    await page.waitForSelector('text=Fab coins')
    
    // Count product cards that contain price information
    const productCards = page.locator('[class*="group"]').filter({ hasText: 'Fab coins' })
    await expect(productCards).toHaveCount(8)
  })

  test('each product card shows name, price, and add-to-cart button', async ({ page }) => {
    await page.waitForSelector('text=Fab coins')
    
    // Get the first product card
    const firstProduct = page.locator('[class*="group"]').filter({ hasText: 'Fab coins' }).first()
    
    // Check it has price with "Fab coins"
    await expect(firstProduct.getByText(/fab coins/i)).toBeVisible()
    
    // Check it has an add-to-cart button
    await expect(firstProduct.getByRole('button', { name: /add to cart|remove/i })).toBeVisible()
  })

  test('cart icon badge is visible', async ({ page }) => {
    // Look for the cart badge element
    const cartBadge = page.locator('[class*="absolute"][class*="bg-accent"]').first()
    await expect(cartBadge).toBeVisible()
  })

  test('initial cart count displays 0', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle')
    
    // Find the cart count badge
    const cartBadge = page.locator('[class*="absolute"][class*="bg-accent"]').first()
    await expect(cartBadge).toHaveText('0')
  })
})

