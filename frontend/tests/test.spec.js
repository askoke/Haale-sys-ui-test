// @ts-check
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');

test('Voters load on the page', async ({ page }) => {
    // Navigation to the website.
    await page.goto('http://localhost:3000/');
  
    // Expect a voter to visible.
    await expect(page.getByRole('listitem').filter({hasText: 'Joosep Roo'})).toBeVisible();
});

test.describe('Form button testing', () => { 
    test.beforeEach(async ({ page }) => {
        // Navigation to the website.
        await page.goto('http://localhost:3000/');

        // Voting prep
        await page.getByRole('listitem').filter({hasText: "Joosep Roo"}).locator("select").selectOption("For")
    });

    test('Voting result is updated', async ({ page }) => {
        // Expect for one vote to be "For" and the rest "Against".
        await page.click('input[type=submit]');

        await expect(page.getByLabel('resultFor')).toHaveText('poolt 1 haalt');
        await expect(page.getByLabel('resultAgainst')).toHaveText('vastu 10 haalt');
    });

    test('Clear button resets the voting', async ({ page }) => {
        // Expect Clear button to reset all lists.
        await page.click('input[type=reset]');

        const expected = page.getByRole("listitem").filter({hasText: "Joosep Roo"}).locator("select").selectOption('Against');
        const unexpected = await page.getByRole('listitem').filter({hasText: "Joosep Roo"}).locator("select").selectOption("For");

        await expect(expected).not.toBe(unexpected);
    });
});