import { test, expect } from '@playwright/test';

// testing formularios complejos: (/checkboxes, /dropdowns).

test('Checkboxes - Marcar/Desmarcar', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox1 = page.locator('input[type="checkbox"]').first();
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
});

test('Dropdown - Seleccionar opción', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.selectOption('#dropdown', 'Option 1');
  expect(await page.$eval('#dropdown', el => el.value)).toBe('1');
});