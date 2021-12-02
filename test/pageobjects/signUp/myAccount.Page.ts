class MyAccountPage {
    get myAccountText() { return $('//h1[text()="My account"]'); }
    get clickingOnWomenSection() { return $('//a[@title="Women"]') }
    async womenSection() {
        await this.clickingOnWomenSection.click();
    }
}
export default new MyAccountPage()