import { test, expect } from '@playwright/test';

// testing alertas de JavaScript: (/javascript_alerts).

test('Manejo de alerts', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Prueba 1. Alert simple
  page.once('dialog', dialog => dialog.accept());
  await page.click('button:text("Click for JS Alert")');
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

  // Prueba 2. Confirm (Aceptar)
  page.once('dialog', dialog => dialog.accept());
  await page.click('button:text("Click for JS Confirm")');
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');

  // Prueba 3. Prompt con texto
  page.once('dialog', dialog => dialog.accept('Playwright'));
  await page.click('button:text("Click for JS Prompt")');
  await expect(page.locator('#result')).toHaveText('You entered: Playwright');
});