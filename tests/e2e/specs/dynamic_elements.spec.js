import { test, expect } from '@playwright/test';

// testing elementos dinámicos: (/dynamic_loading)

test('Elemento que aparece después de carga', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await page.click('button');
  await expect(page.locator('#finish')).toBeVisible({ timeout: 10000 });
});