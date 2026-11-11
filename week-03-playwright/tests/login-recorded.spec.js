import { test, expect } from '@playwright/test';

test('TC-013 valid login reaches the secure area', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');            // buka halaman
  await page.getByLabel('Username').fill('tomsmith');                      // isi username
  await page.getByLabel('Password').fill('SuperSecretPassword!');          // isi password
  await page.getByRole('button', { name: /login/i }).click();              // klik Login

  await expect(page).toHaveURL(/\/secure/);                                // pindah ke halaman secure
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');   // pesan sukses
});