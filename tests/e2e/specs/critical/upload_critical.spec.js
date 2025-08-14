import { fileURLToPath } from 'url';
import { test, expect } from '@playwright/test';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// testing upload de archivos con verificación completa.

test('Upload de archivo con verificación completa', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  const filePath = path.join(__dirname, '../../fixtures/example.txt');
  await page.setInputFiles('#file-upload', filePath);

  await page.click('#file-submit');

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  
  const fileName = (await page.locator('#uploaded-files').textContent()).trim();
  expect(fileName).toBe('example.txt');

});