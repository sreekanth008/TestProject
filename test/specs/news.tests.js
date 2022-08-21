const TestPage = require('../pageobjects/test.page');

describe('IRIS', () => {
    it('News test - Positive flow', async () => {
        await TestPage.open(); 
        await TestPage.enterTextAndSearch("B16 8PE");
        await TestPage.selectContactGroup();
        expect(await TestPage.isNewsSectionDisplayed()).toBe.true
    });
    it('News Failed test', async () => {
        await TestPage.openqatest(); 
        expect(await TestPage.isNewsSectionDisplayed()).toBe.true
    });
});


