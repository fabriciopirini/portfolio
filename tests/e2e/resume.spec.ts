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
        await expect(main.getByText(years, { exact: true })).toBeVisible()
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

  test('keyboard focus visits the skip link, Home, then Download PDF', async ({ page }) => {
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Skip to experience' })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Home' })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Download PDF' }).first()).toBeFocused()
  })
})
