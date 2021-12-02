class AddressPage {
    get addressText() { return $('.page-heading') }
    get clickOnCheckOutButton() { return $('//span[text()="Proceed to checkout"]') }
    async checkOut() {
        await this.clickOnCheckOutButton.click();
    }
}
export default new AddressPage()