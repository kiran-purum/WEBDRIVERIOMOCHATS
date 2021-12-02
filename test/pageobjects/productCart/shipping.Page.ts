class ShippingPage {
    get shippingPageHeader() { return $('//h1') }
    get selectingCheckBox() { return $('#cgv') }
    get proceedToCheckOutButton() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
    async checkBoxButton() {
        await this.selectingCheckBox.click();
    }
    async proceedToCheckOut() {
        await this.proceedToCheckOutButton.click();
    }
}
export default new ShippingPage()