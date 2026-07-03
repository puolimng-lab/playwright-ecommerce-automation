import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);

    await expect(
        page.locator('.app_logo')
    ).toContainText('Swag Labs');

    await expect(
        page.locator('.shopping_cart_link')
    ).toBeVisible();
    // await page.goto('https://www.saucedemo.com/');
    // await page.locator('#user-name').fill('standard_user');
    // await page.locator('#password').fill('secret_sauce');
    // await page.locator('#login-button').click();
    // await expect(page).toHaveURL(/inventory/);
});