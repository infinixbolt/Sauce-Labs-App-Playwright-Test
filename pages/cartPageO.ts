import { Locator, Page, expect } from '@playwright/test';
import testData from '../test data/testData';

export class cartPageO {
    readonly page: Page;
    readonly itemName: Locator
    readonly itemQuantity: Locator
    readonly itemPrice: Locator
    readonly checkoutButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.itemName = this.page.locator('[data-test="inventory-item-name"]');
        this.itemQuantity = this.page.locator('[data-test="item-quantity"]');
        this.itemPrice = this.page.locator('[data-test="inventory-item-price"]');
        this.checkoutButton = this.page.locator('[data-test="checkout"]');
    }

    async cartPage() {
        await expect(this.itemName).toHaveText(testData.productName)
        await expect(this.itemQuantity).toHaveText(testData.productQ)
        await expect(this.itemPrice).toHaveText(testData.productPrice)
        await this.checkoutButton.click();
        await expect(this.page).toHaveURL(/checkout-step-one/)
    }
}
