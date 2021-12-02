class SignInPage {
    get signInButton() { return $("//a[@class='login']"); }
    get emailAddress() { return $("//input[@id='email_create']"); }
    get ClickOnCreateAccountButton() { return $("//button[@id='SubmitCreate']"); }
    async homePageLink() {
        await browser.url("http://automationpractice.com/");
        await browser.maximizeWindow();
    }
    async clickOnSignIn() {
        await this.signInButton.click();
    }
    async createAccount() {
        await this.ClickOnCreateAccountButton.click();
    }
}
export default new SignInPage()