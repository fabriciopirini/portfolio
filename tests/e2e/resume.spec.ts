import { test, expect } from '@playwright/test'

import { RESUME } from '@/lib/career-data'

test.describe('Résumé page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resume')
  })

  test('opens with its own heading instead of the homepage name', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Résumé')
    await expect(page.getByRole('heading', { name: 'Fabricio Pirini', level: 1 })).toHaveCount(0)
    await expect(page.getByText('Fabricio Tramontano Pirini · Senior Frontend Engineer · Brazil (UTC−3)')).toBeVisible()

    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Fabricio Pirini')
  })

  test('puts the way home and the PDF on the heading line', async ({ page }) => {
    // At 412px, not the 360px phone viewports: CI's fallback font (DejaVu Sans) is wider than phone system fonts, so
    // the header icon pushes the nav under the heading at 360px there, while Roboto and SF still fit. The nav wraps
    // under the heading on narrower screens by design.
    const { width, height } = page.viewportSize()!
    await page.setViewportSize({ width: Math.max(width, 412), height })
    const heading = await page.getByRole('heading', { level: 1 }).boundingBox()
    const nav = page.getByRole('navigation', { name: 'Résumé' })
    const home = nav.getByRole('link', { name: 'Home' })
    const pdf = nav.getByRole('link', { name: 'Download PDF' })
    await expect(home).toHaveAttribute('href', '/')
    await expect(pdf).toHaveAttribute('href', '/api/resume')

    // Same line: each link's box overlaps the heading's vertical span.
    for (const link of [home, pdf]) {
      const box = (await link.boundingBox())!
      expect(box.y).toBeLessThan(heading!.y + heading!.height)
      expect(box.y + box.height).toBeGreaterThan(heading!.y)
    }

    await home.click()
    await expect(page).toHaveURL('/')
  })

  test('renders every role and education entry from the career data', async ({ page }) => {
    const main = page.getByRole('main')
    for (const { company, periods } of RESUME.jobs) {
      await expect(main.getByRole('heading', { name: company, level: 3 })).toBeVisible()
      for (const { role, years } of periods) {
        await expect(main.getByText(role, { exact: true })).toBeVisible()
        if (years) await expect(main.getByText(years, { exact: true })).toBeVisible()
      }
    }
    for (const { institution, credential, years } of RESUME.education) {
      await expect(main.getByText(institution, { exact: true })).toBeVisible()
      await expect(main.getByText(credential)).toBeVisible()
      await expect(main.getByText(years, { exact: true })).toBeVisible()
    }

    await expect(main.getByText('Itabira, Brazil')).toBeVisible()
    await expect(main.getByText('2011–2018', { exact: true })).toBeVisible()
    await expect(main.getByText('Mid 2013–Late 2014', { exact: true })).toBeVisible()
  })

  test('prints each company once with all of its roles', async ({ page }) => {
    await page.emulateMedia({ media: 'print' })
    const paper = page.locator('.paper')
    for (const { company, periods } of RESUME.jobs) {
      await expect(paper.getByRole('heading', { name: company, exact: true, level: 3 })).toHaveCount(1)
      for (const { role } of periods) {
        await expect(paper.getByText(role, { exact: true })).toBeVisible()
      }
    }
  })

  test('shows MaisLegal as an undated part-time engagement after Kraken', async ({ page }) => {
    const companies = page.getByRole('main').getByRole('heading', { level: 3 })
    await expect(companies.nth(1)).toHaveText('Kraken')
    await expect(companies.nth(2)).toHaveText('MaisLegal')
    const card = page.locator('article', { has: page.getByRole('heading', { name: 'MaisLegal' }) })
    await expect(card.getByText('Contractor - First Engineer (part-time)', { exact: true })).toBeVisible()
    await expect(card.locator('.meta')).toHaveText('Brazil (Remote)')

    await page.emulateMedia({ media: 'print' })
    const entry = page.locator('.paper .company', { has: page.getByRole('heading', { name: 'MaisLegal' }) })
    await expect(entry.locator('.when')).toHaveText('Brazil (Remote)')
  })

  test('keyboard focus visits the skip link, the theme toggle, Home, then Download PDF', async ({ page }) => {
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Skip to experience' })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: 'Dark theme' })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Home' })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Download PDF' }).first()).toBeFocused()
  })
})
