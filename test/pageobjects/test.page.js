
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TestPage extends Page {
    get btnSubmit () {
        return $('a[data-testid="School SearchButton"]');
    }
    
    get searchText () {
        return $('input[id="main"]');
    }

    get searchButton(){
        return $('#searchPostcodeButton')
    }
    get contactGroup(){
        return $('.w-50 >li:nth-child(20)');
    }

    get textNews(){
        return $('div[data-testid="loadRecentNewsItemFromNewsList"]')
    }

    async serachButtonClick(){
        await this.btnSubmit.waitForDisplayed()
        await this.btnSubmit.click()

    }
    async enterTextAndSearch(searchText){
        await this.searchText.setValue(searchText);
        await this.searchButton.click();
    }
    
    async isNewsSectionDisplayed(){
        return await browser.waitUntil(() => this.textNews.isDisplayed());
    }
    async selectContactGroup(){
        await this.contactGroup.scrollIntoView();
        await this.contactGroup.click();
    }
    open () {
        return super.open();
    }
}

module.exports = new TestPage();
