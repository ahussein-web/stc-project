
const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const SubscribePage = require('../pageobjects/subscribe.page');



Given(/^The user navigate to STC subscription Website$/, async () => {
    await SubscribePage.open('https://subscribe.stctv.com/sa-en')
});

When(/^The user select Saudi Arabia as country to use$/, async () => {
    await SubscribePage.countryButton.click()
    await SubscribePage.SAbutton.waitForDisplayed()
    await SubscribePage.SAbutton.click()
});

Then(/^The user should see Lite package for Saudi Arabia$/, async () => {
    await expect(SubscribePage.liteName).toBeDisplayed()
    await expect(SubscribePage.liteName).toHaveText('LITE')

});

Then(/^The user should see Classic package for Saudi Arabia$/, async () => {
    await expect(SubscribePage.classicName).toBeDisplayed()
    await expect(SubscribePage.classicName).toHaveText('CLASSIC')

});

Then(/^The user should see Premium package for Saudi Arabia$/, async () => {
    await expect(SubscribePage.premiumName).toBeDisplayed()
    await expect(SubscribePage.premiumName).toHaveText('PREMIUM')

});

Then(/^The price for Lite package should be displayed correctly for Saudi Arabia$/, async () => {
    await expect(SubscribePage.litePrice).toHaveText('15')

});

Then(/^The price for Classic package should be displayed correctly for Saudi Arabia$/, async () => {
    await expect(SubscribePage.classicPrice).toHaveText('25')

});

Then(/^The price for Premium package should be displayed correctly for Saudi Arabia$/, async () => {
    await expect(SubscribePage.premiumPrice).toHaveText('60')

});


Then(/^The currency for Lite package should be displayed correctly for Saudi Arabia$/, async () => {
    await expect(SubscribePage.liteCurrency).toHaveText('SAR/month')

});

Then(/^The currency for Classic package should be displayed correctly for Saudi Arabia$/, async () => {
    await expect(SubscribePage.classicCurrency).toHaveText('SAR/month')

});

Then(/^The currency for Premium package should be displayed correctly for Saudi Arabia$/, async () => {
    await expect(SubscribePage.premiumCurrency).toHaveText('SAR/month')

});


When(/^The user select Kuwait as country to use$/, async () => {
    await SubscribePage.countryButton.click()
    await SubscribePage.KWbutton.waitForDisplayed()
    await SubscribePage.KWbutton.click()

});

Then(/^The user should see Lite package for Kuwait$/, async () => {
    await expect(SubscribePage.liteName).toBeDisplayed()
    await expect(SubscribePage.liteName).toHaveText('LITE')

});

Then(/^The user should see Classic package for Kuwait$/, async () => {
    await expect(SubscribePage.classicName).toBeDisplayed()
    await expect(SubscribePage.classicName).toHaveText('CLASSIC')

});

Then(/^The user should see Premium package for Kuwait$/, async () => {
    await expect(SubscribePage.premiumName).toBeDisplayed()
    await expect(SubscribePage.premiumName).toHaveText('PREMIUM')

});

Then(/^The price for Lite package should be displayed correctly for Kuwait$/, async () => {
    await expect(SubscribePage.litePrice).toHaveText('1.2')

});

Then(/^The price for Classic package should be displayed correctly for Kuwait$/, async () => {
    await expect(SubscribePage.classicPrice).toHaveText('2.5')

});

Then(/^The price for Premium package should be displayed correctly for Kuwait$/, async () => {
    await expect(SubscribePage.premiumPrice).toHaveText('4.8')

});

Then(/^The currency for Lite package should be displayed correctly for Kuwait$/, async () => {
    await expect(SubscribePage.liteCurrency).toHaveText('KWD/month')

});

Then(/^The currency for Classic package should be displayed correctly for Kuwait$/, async () => {
    await expect(SubscribePage.classicCurrency).toHaveText('KWD/month')

});

Then(/^The currency for Premium package should be displayed correctly for Kuwait$/, async () => {
    await expect(SubscribePage.premiumCurrency).toHaveText('KWD/month')

});

When(/^The user select Bahrain as country to use$/, async () => {
    await SubscribePage.countryButton.click()
    await SubscribePage.BHbutton.waitForDisplayed()
    await SubscribePage.BHbutton.click()

});

Then(/^The user should see Lite package for Bahrain$/, async () => {
    await expect(SubscribePage.liteName).toBeDisplayed()
    await expect(SubscribePage.liteName).toHaveText('LITE')

});

Then(/^The user should see Classic package for Bahrain$/, async () => {
    await expect(SubscribePage.classicName).toBeDisplayed()
    await expect(SubscribePage.classicName).toHaveText('CLASSIC')

});

Then(/^The user should see Premium package for Bahrain$/, async () => {
    await expect(SubscribePage.premiumName).toBeDisplayed()
    await expect(SubscribePage.premiumName).toHaveText('PREMIUM')

});

Then(/^The price for Lite package should be displayed correctly for Bahrain$/, async () => {
    await expect(SubscribePage.litePrice).toHaveText('2')

});

Then(/^The price for Classic package should be displayed correctly for Bahrain$/, async () => {
    await expect(SubscribePage.classicPrice).toHaveText('3')

});

Then(/^The price for Premium package should be displayed correctly for Bahrain$/, async () => {
    await expect(SubscribePage.premiumPrice).toHaveText('6')

});

Then(/^The currency for Lite package should be displayed correctly for Bahrain$/, async () => {
    await expect(SubscribePage.liteCurrency).toHaveText('BHD/month')

});

Then(/^The currency for Classic package should be displayed correctly for Bahrain$/, async () => {
    await expect(SubscribePage.classicCurrency).toHaveText('BHD/month')

});

Then(/^The currency for Premium package should be displayed correctly for Bahrain$/, async () => {
    await expect(SubscribePage.premiumCurrency).toHaveText('BHD/month')

});

