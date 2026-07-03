import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {

    private page: Page;
    private appLogo: Locator;
    private shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.appLogo = page.locator('.app_logo');
        this.shoppingCart = page.locator('.shopping_cart_link');
    }

    async verifyPageLoaded() {
        await expect(this.page).toHaveURL(/inventory/);

        await expect(this.appLogo)
            .toContainText('Swag Labs');

        await expect(this.shoppingCart)
            .toBeVisible();
    }
}