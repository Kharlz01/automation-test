import { test, expect } from '@playwright/test';

// testing drag y drop: (/drag_and_drop).

test('Drag y Drop', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  const draggable = page.locator('#column-a');
  const droppable = page.locator('#column-b');
  await draggable.dragTo(droppable);
  await expect(draggable).toHaveText('B');
});