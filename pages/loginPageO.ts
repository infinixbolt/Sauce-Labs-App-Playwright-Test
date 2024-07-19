import { expect, Page, Locator, } from '@playwright/test'

export class loginPageO {
    readonly page: Page;
    readonly usernameInput: Locator 
    readonly passwordInput: Locator
    readonly loginButton: Locator


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByPlaceholder('username');
        this.passwordInput = this.page.getByPlaceholder('password');
        this.loginButton = this.page.locator('[data-test="login-button"]');
    }

    async login(username:string, password:string){
       await this.page.goto('/');
       await this.usernameInput.fill(username);
       await this.passwordInput.fill(password);
       await this.loginButton.click();
       await expect(this.page).toHaveURL(/inventory/);   
    }
}