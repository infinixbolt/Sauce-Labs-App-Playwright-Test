import { Page, expect, Locator } from "@playwright/test";
import testData from "../test data/testData";

export class checkoutPageO {
    readonly page: Page
    readonly firstNameInput: Locator
    readonly lastNameinput: Locator
    readonly postalCodeInput: Locator
    readonly continueLink: Locator
    readonly itemName: Locator
    readonly paymentValue: Locator
    readonly shippingValue: Locator
    readonly total: Locator
    readonly finishLink: Locator
    readonly statusMessage: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.firstNameInput = this.page.locator('[data-test="firstName"]')
        this.lastNameinput = this.page.locator('[data-test="lastName"]')
        this.postalCodeInput = this.page.locator('[data-test="postalCode"]')
        this.continueLink = this.page.locator('[data-test="continue"]')
        this.itemName = this.page.locator('[data-test="inventory-item-name"]')
        this.paymentValue = this.page.locator('[data-test="payment-info-value"]')
        this.shippingValue = this.page.locator('[data-test="shipping-info-value"]')
        this.total = this.page.locator('[data-test="total-label"]')
        this.finishLink = this.page.locator('[data-test="finish"]')
        this.statusMessage = this.page.locator('[data-test="complete-header"]')
        this.loginButton = this.page.locator('[data-test="login-button"]');
    }

    async enterChekoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameinput.fill(lastName)
        await this.postalCodeInput.fill(postalCode)//13
        await this.continueLink.click()
    }

    async verifyOrderSummary() {
        await expect(this.page).toHaveURL(/checkout-step-two/)
        await expect(this.itemName).toHaveText(testData.orderSummaryDetails.itemName);
        await expect(this.paymentValue).toHaveText(testData.orderSummaryDetails.paymentValue);
        await expect(this.shippingValue).toHaveText(testData.orderSummaryDetails.shippingValue);
        await expect(this.total).toHaveText(testData.orderSummaryDetails.total);
        await this.finishLink.click()//16
    }

    async confirmPurchase() {
        await expect(this.page).toHaveURL(/checkout-complete/)
        await expect(this.statusMessage).toHaveText(testData.statusMessage)
    }

    async logout() {
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
        await expect(this.loginButton).toBeVisible();
    }
}

