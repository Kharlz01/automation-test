import { test, expect } from '@playwright/test';

// testing elementos dinámicos: Aparece/Desaparece.

test('Elementos dinámicos: Aparece/Desaparece', async ({ page }) => {
  // Prueba 1: Elemento que aparece tras carga explícita (/dynamic_loading/1)
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await page.click('button');
  await expect(page.locator('#finish')).toBeVisible({ timeout: 15000 });
  await expect(page.locator('#finish')).toHaveText('Hello World!');

  // Prueba 2: Elemento renderizado después del DOM (/dynamic_loading/2)
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
  await page.click('button');
  await expect(page.locator('#finish')).toBeVisible({ timeout: 15000 });
});