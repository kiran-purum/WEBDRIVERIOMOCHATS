class OrderConfirmPage {
    get clickOnConfirmOrder() { return $("//span[text()='I confirm my order']") }
    get orderConfirmedText() { return $("//h1") }
    async confirmOrder() {
        await this.clickOnConfirmOrder.click()
    }
}
export default new OrderConfirmPage()