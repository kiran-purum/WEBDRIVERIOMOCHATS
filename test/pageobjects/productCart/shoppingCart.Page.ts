class ShoppingCartSummary {
    get shoppingCartHeader() { return $('#cart_title') }
    get clickOnProceedToCheckOut() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
    async proceedToCheck() {
        await this.clickOnProceedToCheckOut.click();
    }
}
export default new ShoppingCartSummary()