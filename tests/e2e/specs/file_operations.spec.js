import { fileURLToPath } from "url";
import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// testing carga y descarga de archivos: (/upload y /download).

test.describe("Operacion de archivos", () => {
  // Prueba 1: Upload
  test("Upload de archivo", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    const filePath = path.join(__dirname, "../fixtures/example.txt");
    await page.setInputFiles("#file-upload", filePath);
    await page.click("#file-submit");
    await expect(page.locator(".example h3")).toHaveText("File Uploaded!");
  });

  // Prueba 2: Download
  test("Download de archivo", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent("download");
    await page.click('a:text("example.txt")');
    const download = await downloadPromise;

    const downloadPath = path.join(__dirname, "../downloads/", download.suggestedFilename());
    await download.saveAs(downloadPath);
    expect(fs.existsSync(downloadPath)).toBeTruthy();
    expect(fs.statSync(downloadPath).size).toBeGreaterThan(0);

    fs.unlinkSync(downloadPath);
  });
});
