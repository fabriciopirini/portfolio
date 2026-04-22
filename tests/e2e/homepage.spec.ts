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

  test('skip to my story link navigates to experience section when activated', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: /skip to my story/i })

    await expect(skipLink).toBeAttached()
    await expect(skipLink).toHaveAttribute('href', '#experience')

    await page.keyboard.press('Tab')
    await expect(skipLink).toBeFocused()

    await page.keyboard.press('Enter')
    await expect(page.locator('#experience')).toBeVisible()
    await expect(page).toHaveURL(/#experience$/)
  })

  test('nav links show focus ring on keyboard navigation', async ({ page }) => {
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    const focusedLink = page.locator('a:focus-visible').first()
    await expect(focusedLink).toBeVisible()
    const boxShadow = await focusedLink.evaluate((el) => getComputedStyle(el).boxShadow)
    expect(boxShadow).not.toBe('none')
  })

  test('contact me button shows focus ring on keyboard navigation', async ({ page }) => {
    const contactBtn = page.getByRole('button', { name: /contact me/i })
    await contactBtn.focus()
    await expect(contactBtn).toBeFocused()

    const boxShadow = await contactBtn.evaluate((el) => getComputedStyle(el).boxShadow)
    expect(boxShadow).not.toBe('none')
  })
})

test.describe('Hamburger menu keyboard navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('hamburger menu opens with Space and first item has visual highlight', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /open navigation menu/i })

    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('Tab')
    }
    await expect(menuButton).toBeFocused()

    await page.keyboard.press('Space')
    const aboutItem = page.getByRole('menuitem', { name: 'About' })
    await expect(aboutItem).toBeVisible()

    const bg = await aboutItem.evaluate((el) => getComputedStyle(el).backgroundColor)
    expect(bg).not.toBe('rgba(0, 0, 0, 0)')
  })

  test('arrow keys navigate between menu items with highlight', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /open navigation menu/i })
    await menuButton.focus()
    await page.keyboard.press('Space')

    const aboutItem = page.getByRole('menuitem', { name: 'About' })
    await expect(aboutItem).toBeVisible()

    await page.keyboard.press('ArrowDown')
    const techItem = page.getByRole('menuitem', { name: 'Technology' })
    await expect(techItem).toHaveAttribute('data-highlighted')

    await page.keyboard.press('ArrowDown')
    const expItem = page.getByRole('menuitem', { name: 'Experience' })
    await expect(expItem).toHaveAttribute('data-highlighted')

    await page.keyboard.press('ArrowUp')
    await expect(techItem).toHaveAttribute('data-highlighted')
  })
})

test.describe('Touch targets meet 44px minimum (WCAG 2.5.8)', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('footer social icons are at least 44x44px', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded()

    const footerLinks = page.locator('footer a[data-atrr]')
    const count = await footerLinks.count()
    expect(count).toBeGreaterThanOrEqual(3)

    for (let i = 0; i < count; i++) {
      const link = footerLinks.nth(i)
      const box = await link.boundingBox()
      expect(box).toBeTruthy()
      expect(box!.width).toBeGreaterThanOrEqual(44)
      expect(box!.height).toBeGreaterThanOrEqual(44)
    }
  })

  test('CTA buttons are at least 44px tall on mobile', async ({ page }) => {
    const ctaSelectors = [
      page.getByRole('link', { name: /resume/i }),
      page.getByRole('button', { name: /contact me/i }),
    ]

    for (const cta of ctaSelectors) {
      await expect(cta).toBeVisible()
      const box = await cta.boundingBox()
      expect(box).toBeTruthy()
      expect(box!.height).toBeGreaterThanOrEqual(44)
    }
  })
})

test.describe('Reduced-motion preference', () => {
  test.use({ viewport: { width: 1280, height: 720 } })

  test('disables CSS animations when prefers-reduced-motion is set', async ({ browser }) => {
    const context = await browser.newContext({
      reducedMotion: 'reduce',
    })
    const page = await context.newPage()
    await page.goto('/')

    const hasAnimationsDisabled = await page.evaluate(() => {
      const el = document.createElement('div')
      el.className = 'animate-wave'
      document.body.appendChild(el)
      const computed = getComputedStyle(el).animationName
      document.body.removeChild(el)
      return computed === 'none'
    })
    expect(hasAnimationsDisabled).toBe(true)

    await context.close()
  })

  test('Atropos cards render without 3D tilt when prefers-reduced-motion is set', async ({ browser }) => {
    const context = await browser.newContext({
      reducedMotion: 'reduce',
      viewport: { width: 1280, height: 720 },
    })
    const page = await context.newPage()
    await page.goto('/')

    const section = page.locator('#technology')
    await section.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    const atroposContainers = await page.locator('.atropos').count()
    expect(atroposContainers).toBe(0)

    const desktopSkillCards = page.locator('#technology > div:last-child .bg-skill-card')
    await expect(desktopSkillCards.first()).toBeVisible()

    await context.close()
  })

  test('Atropos cards render with 3D tilt when motion is not reduced', async ({ browser }) => {
    const context = await browser.newContext({
      reducedMotion: 'no-preference',
      viewport: { width: 1280, height: 720 },
    })
    const page = await context.newPage()
    await page.goto('/')

    const section = page.locator('#technology')
    await section.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    const atroposContainers = await page.locator('.atropos').count()
    expect(atroposContainers).toBeGreaterThan(0)

    await context.close()
  })
})

test.describe('Active nav state follows scroll', () => {
  test.use({ viewport: { width: 1280, height: 720 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('highlights About link when about section is visible', async ({ page }) => {
    await page.locator('#about').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    const aboutLink = page.locator('.navLink', { hasText: 'About' })
    await expect(aboutLink).toHaveAttribute('data-active')
  })

  test('highlights Technology link when technology section is visible', async ({ page }) => {
    await page.locator('#technology').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    const techLink = page.locator('.navLink', { hasText: 'Technology' })
    const aboutLink = page.locator('.navLink', { hasText: 'About' })

    await expect(techLink).toHaveAttribute('data-active')
    await expect(aboutLink).not.toHaveAttribute('data-active')
  })

  test('only one nav link is active at a time', async ({ page }) => {
    await page.locator('#experience').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    const activeCount = await page.locator('.navLink[data-active]').count()
    expect(activeCount).toBe(1)

    const expLink = page.locator('.navLink', { hasText: 'Experience' })
    await expect(expLink).toHaveAttribute('data-active')
  })
})
