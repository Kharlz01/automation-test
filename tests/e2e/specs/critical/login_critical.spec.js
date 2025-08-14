import { test, expect } from '@playwright/test';

// testing login completo con validación de seguridad.

test('Login y validación de seguridad', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Prueba con credenciales inválidas
  await page.fill('#username', 'generic_user');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');

  // Prueba con credenciales válidas
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/secure/);
});