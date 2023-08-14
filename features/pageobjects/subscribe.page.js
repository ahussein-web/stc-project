const { $ } = require('@wdio/globals')
const Page = require('./page');

class SubscribePage extends Page {

    get countryButton () {
        return $('#country-btn');
    }

    get SAbutton () {
        return $('#sa');
    }
    
    get KWbutton () {
        return $('#kw');
    }

    get BHbutton () {
        return $('#bh');
    }

    get liteName () {
        return $('#name-lite');
    }

    get classicName () {
        return $('#name-classic');
    }

    get premiumName () {
        return $('#name-premium');
    }

    get litePrice () {
        return $("//div[@id='currency-lite']/b");
    }

    get classicPrice () {
        return $("//div[@id='currency-classic']/b");
    }

    get premiumPrice () {
        return $("//div[@id='currency-premium']/b");
    }

    get liteCurrency () {
        return $("//div[@id='currency-lite']/i");
    }

    get classicCurrency () {
        return $("//div[@id='currency-classic']/i");
    }

    get premiumCurrency () {
        return $("//div[@id='currency-premium']/i");
    }




}
module.exports = new SubscribePage();

