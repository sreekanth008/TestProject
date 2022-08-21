/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    open () {
        return browser.url("https://osa-web.t-cg.co.uk/")
    }
    openqatest () {
        return browser.url("https://osa-web.t-cg.co.uk/qatest")
    }
}
