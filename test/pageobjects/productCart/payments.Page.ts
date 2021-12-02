class PaymentsPage {
    get paymentHeader() { return $("//h1") }
    get clickOnPaymentType() { return $('.bankwire') }
    async paymentType() {
        await this.clickOnPaymentType.click();
    }
}
export default new PaymentsPage()