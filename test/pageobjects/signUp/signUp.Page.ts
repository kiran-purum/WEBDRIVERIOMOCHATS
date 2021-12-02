class SignUpPage {
    get pageHeader() { return $("//*[@id='account-creation_form']/div[1]/h3") }
    get clickOnRadioButton() { return $("#id_gender1"); }
    get firstName() { return $("//input[@id='customer_firstname']") }
    get lastname() { return $("//input[@id='customer_lastname']") }
    get password() { return $("//input[@id='passwd']") }
    get dobDay() { return $('//select[@id="days"]') }
    get dobMonth() { return $('#months') }
    get dobYear() { return $('//select[@id="years"]') }
    get clickOnCheck() { return $("//input[@id='optin']") }
    get addressFirstName() { return $('//input[@id="firstname"]') }
    get addressLastName() { return $('//input[@id="lastname"]') }
    get company() { return $('#company') }
    get address1() { return $('#address1') }
    get city() { return $('//input[@name="city"]') }
    get state() { return $('#id_state') }
    get zipCode() { return $('#postcode') }
    get country() { return $('#id_country') }
    get mobilePhone() { return $('#phone_mobile') }
    get alias_address() { return $('#alias') }
    get clickOnRegisterButton() { return $('#submitAccount') }

    async radioButton() {
        await this.clickOnRadioButton.click();
    }
    async personalInfo(userName: { firstname: string, lastname: string }) {
        await this.firstName.setValue(userName.firstname);
        await this.lastname.setValue(userName.lastname);
    }
    async oneTimePassword(password: string) {
        await this.password.setValue(password);
    }
    async dateOfBirth(date: { day: number, month: number, year: number }) {
        await this.dobDay.selectByIndex(date.day);
        await this.dobMonth.selectByAttribute('value', date.month);
        await this.dobYear.selectByIndex(date.year);
    }
    async checkButton() {
        await this.clickOnCheck.click();
    }
    async companyName(company: string) {
        await this.company.setValue(company)
    }
    async addressInfo(address: { address1: string, city: string, state: number, pincode: number, country: string }) {
        await this.address1.setValue(address.address1);
        await this.city.setValue(address.city);
        await this.state.selectByAttribute('value', address.state);
        await this.zipCode.setValue(address.pincode);
        await this.country.selectByVisibleText(address.country);
    }
    async mobileNumber(mobileNumber: number) {
        await this.mobilePhone.setValue(mobileNumber)
    }
    async aliasAddress(aliasAdress: string) {
        await this.alias_address.setValue(aliasAdress)
    }
    async registerButton() {
        await this.clickOnRegisterButton.click();
    }
}
export default new SignUpPage()