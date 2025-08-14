import { test, expect } from '@playwright/test';

// testing interacciones complejas (drag & drop)

test('Drag y Drop', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  const draggable = await page.locator('#column-a');
  const droppable = await page.locator('#column-b');
  await draggable.dragTo(droppable);
  await expect(droppable).toHaveText('A');
});