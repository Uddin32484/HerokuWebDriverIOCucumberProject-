
const {Given, When, Then } = require('@wdio/cucumber-framework')
const {expect, $} = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');

Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.inputUserName.setValue(username);
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.btnSubmit.click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await LoginPage.flashAlert.waitForExist();
    await expect(LoginPage.flashAlert).toHaveText(expect.stringContaining(message));
});
    

