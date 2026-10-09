import { test, expect } from '@playwright/test'

test('shop and the old blog post redirect home', async ({ page }) => {
  await page.goto('/shop')
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('heading', { name: /fab's shop/i })).toHaveCount(0)
  await expect(page.getByRole('link', { name: 'Shop' })).toHaveCount(0)

  await page.goto('/blog/cracking-your-clipboard-health-tech-interview-a-developers-guide-to-success')
  await expect(page).toHaveURL('/')
})

test('homepage states the fintech title and building since 2017', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Senior Frontend Engineer building fintech products for web and mobile.')).toBeVisible()
  await expect(page.getByText('Building since 2017')).toBeVisible()
  await expect(page.getByText(/cutting runtime by 120x and resource usage by 10x/)).toBeVisible()
  await expect(page.getByText('15+ financial data tables')).toBeVisible()
  await expect(page.getByText("Building something in fintech? I'm happy to chat.").first()).toBeVisible()
  await expect(page.getByText(/years of experience/i)).toHaveCount(0)
  await expect(page.getByText(/Currently at Kraken/)).toHaveCount(0)
})

test('resume dates Kraken through 2026 and names the current client', async ({ page }) => {
  await page.goto('/resume')
  await expect(page.getByText('Senior Frontend Engineer').first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Pre-launch US consumer fintech' })).toBeVisible()
  await expect(page.getByText('Nov. 2024 - 2026')).toBeVisible()
  await expect(page.getByText(/120x/)).toBeVisible()
  await expect(page.getByText('15+ financial data tables')).toBeVisible()
  await expect(page.getByText(/Currently at Kraken/)).toHaveCount(0)
  await expect(page.getByText('Nov. 2024 - Present')).toHaveCount(0)
})
