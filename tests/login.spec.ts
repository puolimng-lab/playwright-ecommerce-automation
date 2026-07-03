import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../data/loginData';

for(const data of loginData){
    test(data.title, async ({ page }) => {
        const loginPage = new LoginPage(page);
    
        await loginPage.goto();
    
        await loginPage.login(
            data.username,
            data.password
        );
    
        if(data.success){
            await expect(page).toHaveURL(/inventory/);
    
            await expect(
                page.locator('.app_logo')
            ).toContainText('Swag Labs');
        
            await expect(
                page.locator('.shopping_cart_link')
            ).toBeVisible();
        }
        else{
            await expect(
                page.locator('[data-test="error"]')
            ).toBeVisible();

            await expect(
                page.locator('[data-test="error"]')
            ).toContainText('Epic sadface');
        }
    });
}
