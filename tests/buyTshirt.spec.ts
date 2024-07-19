import { test } from "@playwright/test"
import { faker } from '@faker-js/faker'
import { loginPageO } from "../pages/loginPageO"
import { productPageO } from "../pages/productPageO"
import { cartPageO } from "../pages/cartPageO"
import { checkoutPageO } from "../pages/checkoutPageO"


test.describe('Sauce Labs Demo Application', () => {
    test('Buy a T-shirt - steps 1-19', async ({ page }) => {
        const loginPage = new loginPageO(page)
        const productPage = new productPageO(page)
        const cartPage = new cartPageO(page)
        const checkout = new checkoutPageO(page)

        //Login method. Handles steps 1-3
        await loginPage.login(process.env.Username1!, process.env.Password!)

        //Add to cart. Handles steps 4-9
        await productPage.addToCart()

        //Verify cart item and proceeds. Handles steps 10-12
        await cartPage.cartPage()

        //Enter checkout details. Handles steps 13-14
        await checkout.enterChekoutInfo(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode())

        //verify order summary. Handles steps 15-16 
        await checkout.verifyOrderSummary()

        //Confirms successful purchase. Handles steps 17
        await checkout.confirmPurchase()

        //Logs out and verify with redirection to login page. Handles steps 18-19
        await checkout.logout()

    })
})