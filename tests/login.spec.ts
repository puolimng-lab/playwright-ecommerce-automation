import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { loginData } from '../data/loginData';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);   
    inventoryPage = new InventoryPage(page); 
    await loginPage.goto();   
});

for(const data of loginData){
    test(data.title, async () => {
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
