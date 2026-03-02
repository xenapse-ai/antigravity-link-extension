import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('Mobile UI should work', async ({ page }) => {
    await page.setViewportSize({ width: 412, height: 915 });
    const htmlPath = path.resolve('public/index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    await page.setContent(htmlContent);

    // Render basics
    await expect(page.locator('#chatContainer')).toBeVisible();

    // Controls
    await page.evaluate(() => {
      (window as any).updateControls('<div class="artifact-container">A1</div>');
    });

    await page.click('#artifactsChip');
    await expect(page.locator('#artifactsSheet')).toHaveClass(/show/);
    await expect(page.locator('.card')).toHaveCount(1);

    await page.click('#sheetOverlay', { position: { x: 10, y: 10 }, force: true });
    await expect(page.locator('#artifactsSheet')).not.toHaveClass(/show/);

    await page.click('#instancesBtn');
    await expect(page.locator('#instancesModal')).toHaveClass(/show/);
});
