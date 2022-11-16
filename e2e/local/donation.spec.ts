import { test, expect } from '@playwright/test'
import { AuthPage } from '../AuthPage'

test.beforeEach(async ({ page }) => {
  await page.goto('/campaigns/donation/repellat-recusandae-aliquid')
})

test.describe('donation page init', () => {
  test('test rendering and defaults', async ({ page }) => {
    await expect(
      page.locator('label', { has: page.locator('text=Карта') }).locator('input[type="radio"]'),
    ).toBeChecked()
    await expect(
      page
        .locator('label', { has: page.locator('text=Банков превод') })
        .locator('input[type="radio"]'),
    ).not.toBeChecked()
  })
})

test.describe('logged in user donation flow', () => {
  test.beforeEach(async ({ page }) => {
    await new AuthPage(page).login()
    await page.goto('/campaigns/donation/repellat-recusandae-aliquid')
  })
  test('choosing a predefined value and donate', async ({ page }) => {
    //First step
    await page
      .locator('[role="radiogroup"]')
      .locator('label', { has: page.locator('text=Друга сума') })
      .locator('input[type="radio"]')
      .check()

    // Choose a predefined value from the radio buttons
    await page
      .locator('[role="radiogroup"]')
      .locator('label', { has: page.locator('text=5 лв.') })
      .locator('input[type="radio"]')
      .check()

    // Click checbox to cover the tax by stripe
    await page.locator('input[name="cardIncludeFees"]').check()
    await page.locator('button:has-text("Напред")').click()

    await expect(page.locator('text=Вече сте влезли във Вашия профил')).toBeDefined()
    await page.locator('button:has-text("Напред")').click()

    await page.fill('textarea', 'Test message')
    await page.locator('button:has-text("Премини към плащане")').click()

    await page.waitForURL((url) => url.host === 'checkout.stripe.com')

    await expect(page.locator('text=BGN 5.00')).toBeDefined()
    await page.locator('input[name="email"]').fill('admin@podkrepi.bg')
    await page.locator('input[name="cardNumber"]').fill('4242424242424242')
    await page.locator('input[name="cardExpiry"]').fill('0424')
    await page.locator('input[name="cardCvc"]').fill('123')
    await page.locator('input[name="billingName"]').fill('John Doe')
    await page.locator('select[name="billingCountry"]').selectOption('BG')

    await page.locator('button[data-testid="hosted-payment-submit-button"]').click()

    await page.waitForURL((url) => url.searchParams.get('success') === 'true', {
      waitUntil: 'networkidle',
    })

    await expect(page.locator('text=Благодарим за доверието и подкрепата!')).toBeDefined()
  })
})

test('choosing a custom value and continuing', async ({ page }) => {
  await page
    .locator('[role="radiogroup"]')
    .locator('label', { has: page.locator('text=Друга сума') })
    .locator('input[type="radio"]')
    .check()

  // Choose a custom value
  await page
    .locator(
      // This selector is needed because MUI doubles the input field when using collapse animation
      'div.MuiCollapse-root:not(.MuiCollapse-hidden) input[name="otherAmount"][aria-invalid=false]',
    )
    .fill('100')

  // Click checbox to cover the tax by stripe
  await page.locator('input[name="cardIncludeFees"]').check()
  await page.locator('button:has-text("Напред")').click()
})
