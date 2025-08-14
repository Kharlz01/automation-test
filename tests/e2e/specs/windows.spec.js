import { test, expect } from '@playwright/test';

// testing multiples ventanas: (/windows).

test('Manejo de múltiples ventanas', async ({ browser }) => {
  // 1. Abrir página principal
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/windows');

  // 2. Click abre nueva pestaña
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a:text("Click Here")')
  ]);

  // 3. Validar nueva pestaña
  await newPage.waitForLoadState();
  expect(await newPage.title()).toBe('New Window');
  expect(await newPage.locator('h3').textContent()).toContain('New Window');

  // Cerrar pestaña (opcional)
  await newPage.close();
});