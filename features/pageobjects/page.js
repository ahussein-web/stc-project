const { browser } = require('@wdio/globals')

module.exports = class Page {

    async open (path) {
        await browser.url(path)
    }

    async close () {
        await browser.closeWindow()
    }
}