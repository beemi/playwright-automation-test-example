import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage(url: string) {
        await this.page.goto(url);
    }

    async clickOnLoginButton() {
        await this.page.click('text=Login');
    }

    async clickOnRegisterButton() {
        await this.page.click('text=Register');
    }

    async clickOnLogoutButton() {
        await this.page.click('text=Logout');
    }

    async clickOnBillingLineButton() {
        await this.page.click('text=Billing Lines');
    }

    async clickOnBillingLineBasketButton() {
        await this.page.click('text=Billing Line Basket');
    }

    async clickOnBillingLineBasketCheckoutButton() {
        await this.page.click('text=Checkout');
    }

    async clickOnBillingLineBasketCheckoutConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCloseCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseCancelButton() {
        await this.page.click('text=Cancel');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseCloseButton() {
        await this.page.click('text=Close');
    }

    async clickOnBillingLineBasketCheckoutCloseCloseCloseCloseConfirmButton() {
        await this.page.click('text=Confirm');
    }
}
