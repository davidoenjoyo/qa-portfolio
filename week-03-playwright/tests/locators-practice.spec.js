import { test, expect } from '@playwright/test';

test('checkboxes: second checkbox is checked by default', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');    // buka halaman checkbox
  const checkboxes = page.getByRole('checkbox');                       // semua checkbox di halaman
  await expect(checkboxes.nth(1)).toBeChecked();                       // checkbox ke-2 (hitungan mulai 0) sudah tercentang
});

test('dropdown: can select Option 2', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');      // buka halaman dropdown
  await page.getByRole('combobox').selectOption('2');                  // pilih opsi bernilai 2
  await expect(page.getByRole('combobox')).toHaveValue('2');           // periksa nilai terpilih
});