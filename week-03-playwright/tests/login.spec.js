import { test, expect } from '@playwright/test';

// current behaviour, see BUG-001 (TC-001, TC-007) and BUG-002 (TC-014, TC-015, TC-016)
const invalidLogins = [
  { id: 'TC-001', username: '',          password: 'SuperSecretPassword!', message: 'Your username is invalid!' },
  { id: 'TC-007', username: 'tomsmith',  password: '',                     message: 'Your password is invalid!' },
  { id: 'TC-014', username: 'tomsmith',  password: 'WrongPassword123',     message: 'Your password is invalid!' },
  { id: 'TC-015', username: 'wronguser', password: 'SuperSecretPassword!', message: 'Your username is invalid!' },
  { id: 'TC-016', username: 'wronguser', password: 'WrongPassword123',     message: 'Your username is invalid!' },
  { id: 'TC-020', username: "' OR '1'='1", password: 'anything',          message: 'Your username is invalid!' },
];

test.describe('Login page', () => {                    // kelompokkan semua tes login di laporan

  test.beforeEach(async ({ page }) => {                // dijalankan sebelum SETIAP tes di grup ini
    await page.goto('/login');                         // buka halaman login sekali di sini
  });

  test('TC-013 valid login reaches the secure area', async ({ page }) => {
    await page.getByLabel('Username').fill('tomsmith');                      // isi username
    await page.getByLabel('Password').fill('SuperSecretPassword!');          // isi password
    await page.getByRole('button', { name: /login/i }).click();              // klik Login
    await expect(page).toHaveURL(/\/secure/);                                // pindah ke halaman secure
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

  for (const c of invalidLogins) {                     // satu tes per baris data
    test(`${c.id} invalid login shows "${c.message}"`, async ({ page }) => {
      await page.getByLabel('Username').fill(c.username);                    // username dari data
      await page.getByLabel('Password').fill(c.password);                    // password dari data
      await page.getByRole('button', { name: /login/i }).click();            // klik Login
      await expect(page.locator('#flash')).toContainText(c.message);         // pesan error sesuai data
      await expect(page).toHaveURL(/\/login/);                               // tetap di halaman login
    });
  }

  test('TC-018 password field masks the input', async ({ page }) => {
    await expect(page.getByLabel('Password')).toHaveAttribute('type', 'password');   // kolom bertipe password
  });

  test('logout returns to the login page', async ({ page }) => {
    await page.getByLabel('Username').fill('tomsmith');                      // isi username
    await page.getByLabel('Password').fill('SuperSecretPassword!');          // isi password
    await page.getByRole('button', { name: /login/i }).click();              // login
    await page.getByRole('link', { name: /logout/i }).click();               // klik Logout
    await expect(page).toHaveURL(/\/login/);                                 // kembali ke /login
    await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
  });

});