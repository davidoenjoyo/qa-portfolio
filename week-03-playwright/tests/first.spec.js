import { test, expect } from '@playwright/test';

test('login page shows the page title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
});