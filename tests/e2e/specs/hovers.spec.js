import { test, expect } from '@playwright/test';

// testing hovers: (/hovers).

test('Tooltips aparecen al hacer hover', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  const avatares = await page.locator('.figure').all();
  
  for (const avatar of avatares) {
    await avatar.hover();
    const tooltip = await avatar.locator('.figcaption');
    await expect(tooltip).toBeVisible();
    console.log('Tooltip visible:', await tooltip.textContent());
  }
});