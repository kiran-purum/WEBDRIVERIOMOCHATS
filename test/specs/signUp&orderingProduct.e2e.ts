import { internet } from "faker"
import myAccountPage from "../pageobjects/signUp/myAccount.Page";
import addressPage from "../pageobjects/productCart/address.Page";
import shippingPage from "../pageobjects/productCart/shipping.Page";
import shoppingCartPage from "../pageobjects/productCart/shoppingCart.Page";
import womenSectionPage from "../pageobjects/productCart/womenSection.Page";
import signInPage from "../pageobjects/signUp/signIn.Page";
import signUpPage from "../pageobjects/signUp/signUp.Page";
import signUp from "../testData/signUp.json"
import paymentsPage from "../pageobjects/productCart/payments.Page";
import oderConfirmPage from "../pageobjects/productCart/oderConfirm.Page";

describe("Account Creation and Ordering Product in AutomationPractice App", () => {

    it("This is the Home Page of MyStore", async () => {
        await signInPage.homePageLink();
    });

    it("I Click on Sign in button", async () => {
        await signInPage.clickOnSignIn()
    });

    it("I enter email and click on create account button", async () => {
        await signInPage.emailAddress.setValue(internet.email());
        await signInPage.createAccount();
    });

    it("I should see page header text as {YOUR PERSONAL INFORMATION}", async () => {
        await expect(signUpPage.pageHeader).toHaveText("YOUR PERSONAL INFORMATION");
    });

    it("I enter the data in all fields and click register button", async () => {
        await signUpPage.radioButton();
        await signUpPage.personalInfo(signUp.userName);
        await signUpPage.oneTimePassword(internet.password(12));
        await signUpPage.dateOfBirth(signUp.dateOfBirth);
        await signUpPage.checkButton();
        await signUpPage.companyName(signUp.company);
        await signUpPage.addressInfo(signUp.address);
        await signUpPage.mobileNumber(signUp.mobileNumber);
        await signUpPage.aliasAddress(signUp.aliasAddress);
        await signUpPage.registerButton();
    });

    it("I should navigate and see header as {MY ACCOUNT}", async () => {
        await expect(myAccountPage.myAccountText).toHaveText("MY ACCOUNT");
    });

    it("I click on women section button and add the product to cart", async () => {
        await myAccountPage.womenSection();
        await womenSectionPage.addProductToCart();
    });

    it("I should see message {Product successfully added to your shopping cart}", async () => {
        await expect(womenSectionPage.productAdded).toHaveText("Product successfully added to your shopping cart");
    });

    it("I click on Proceed to CheckoutButton", async () => {
        await womenSectionPage.proceedToCheckOut(); 
    });

    it("I should see the header text as {SHOPPING-CART SUMMARY}", async () => {
        await expect(shoppingCartPage.shoppingCartHeader).toHaveTextContaining("SHOPPING-CART SUMMARY")
    });

    it("I click on checkout button", async () => {
        await shoppingCartPage.proceedToCheck()
    });

    it("I navigate to Addresses Page and see {ADDRESSES}", async () => {
        await expect(addressPage.addressText).toHaveText("ADDRESSES");
    });

    it("I clink on proceedToCheckOut button", async () => {
        await addressPage.checkOut();
    });

    it("I navigate to next page and validate {SHIPPING}", async () => {
        await expect(shippingPage.shippingPageHeader).toHaveText("SHIPPING");
    });

    it("I select the check box and proceed to check out", async () => {
        await shippingPage.checkBoxButton();
        await shippingPage.proceedToCheckOut();
    });

    it("I should be navigated and validate {PLEASE CHOOSE YOUR PAYMENT METHOD}", async () => {
        await expect(paymentsPage.paymentHeader).toHaveText("PLEASE CHOOSE YOUR PAYMENT METHOD");
    });

    it("I click on the payment and confirm order", async () => {
        await paymentsPage.paymentType();
        await oderConfirmPage.confirmOrder();
    });

    it("I navigate and see the details {ORDER CONFIRMATION}", async () => {
        await expect(oderConfirmPage.orderConfirmedText).toHaveText("ORDER CONFIRMATION");
    });
})