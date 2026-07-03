import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { loginData } from '../data/loginData';

for(const data of loginData){
    test(data.title, async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
    
        await loginPage.goto();
    
        await loginPage.login(
            data.username,
            data.password
        );
    
        if(data.success){
            await inventoryPage.verifyPageLoaded();
        }
        else{
            await loginPage.verifyLoginError();
        }
    });
}
