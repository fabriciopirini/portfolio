import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('loads and displays hero section with name', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /fabricio/i })).toBeVisible()
  })

  test('renders all main sections', async ({ page }) => {
    // Hero section should be visible
    await expect(page.getByRole('heading', { name: /fabricio/i })).toBeVisible()

    // AboutMe section
    await expect(page.getByText(/about me/i).first()).toBeVisible()

    // Technology section
    await expect(page.getByRole('heading', { name: /technology/i })).toBeVisible()

    // WorkExperience section
    await expect(page.getByText(/where it all started/i)).toBeVisible()
  })

  test('resume download button has correct href', async ({ page }) => {
    const resumeButton = page.getByRole('link', { name: /resume/i })
    await expect(resumeButton).toBeVisible()
    await expect(resumeButton).toHaveAttribute('href', '/api/resume')
  })

  test('resume download button initiates download', async ({ page }) => {
    const resumeButton = page.getByRole('link', { name: /resume/i })
    await expect(resumeButton).toBeVisible()

    // Check that clicking doesn't navigate away (downloads instead)
    const href = await resumeButton.getAttribute('href')
    expect(href).toBe('/api/resume')
  })

  test('contact me button opens popover', async ({ page }) => {
    const contactButton = page.getByRole('button', { name: /contact me/i })
    await expect(contactButton).toBeVisible()

    await contactButton.click()

    // Wait for popover to appear
    await expect(page.getByText(/email/i).first()).toBeVisible()
  })

  test('popover displays email link with correct recipient', async ({ page }) => {
    const contactButton = page.getByRole('button', { name: /contact me/i })
    await contactButton.click()

    // Check for mailto link with correct email (URL encoded @ symbol)
    const emailLink = page.locator('a[href*="mailto:"][href*="fabricio"]')
    await expect(emailLink.first()).toBeVisible()
  })

  test('popover displays LinkedIn link', async ({ page }) => {
    const contactButton = page.getByRole('button', { name: /contact me/i })
    await contactButton.click()

    // Check for LinkedIn link in the popover
    const linkedInLink = page.locator('a[href*="linkedin.com"]').first()
    await expect(linkedInLink).toBeVisible()
  })
})
