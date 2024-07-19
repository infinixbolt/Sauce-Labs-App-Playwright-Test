import { Page, expect, Locator } from '@playwright/test'

export class productPageO {
    readonly page: Page
    readonly tShirtLink: Locator
    readonly addToCartButton: Locator
    readonly shoppingCartBadge: Locator
    readonly shoppingCartLink: Locator


    constructor(page: Page) {
        this.page = page
        this.tShirtLink = this.page.getByText('Sauce Labs Bolt T-Shirt', { exact: true })
        this.addToCartButton = this.page.locator('[data-test="add-to-cart"]')
        this.shoppingCartBadge = this.page.locator('[data-test="shopping-cart-badge"]')
        this.shoppingCartLink = this.page.locator('[data-test="shopping-cart-link"]')
    }

    async addToCart() {
        await this.tShirtLink.click()
        await expect(this.page).toHaveURL(/id=1/)
        await this.addToCartButton.click()
        await expect(this.shoppingCartBadge).toHaveText('1')
        await this.shoppingCartLink.click()
        await expect(this.page).toHaveURL(/cart/)

    }


}

