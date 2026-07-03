import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;

    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private successMessage: Locator;
    private errorMessage: Locator;

    constructor(page: Page){
        this.page = page;

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');

        this.errorMessage = page.locator('[data-test="error"]')
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginError() {
        await expect(this.errorMessage)
            .toBeVisible();

        await expect(this.errorMessage)
            .toContainText('Epic sadface');
    }
}