import iframePage from "../pages/iframe-page";
describe('iframe operation', () => {
    it('Perform iframe Upload Operation and assert value', async() => {
        await browser.url("/iframe-sample/");
        const iframeId = await iframePage.iframeId;
        await browser.switchToFrame(iframeId);
        const iframeLogo = await iframePage.iframeLogo;
        iframeLogo.isExisting()
        const parentId = await browser.getWindowHandle();
        await iframePage.clickOnLearnMoreBtn.click();
        const id = await browser.getWindowHandles();
        for(let i=0; i<=id.length;i++){
            if(id[i]!=parentId){
                await browser.switchToWindow(id[i]);
                await browser.maximizeWindow();
                    await iframePage.clickOnSignInIconOnNewWindow.click()  
                break;
            }
        }
        await browser.switchToWindow(parentId)
       // await browser.switchToFrame(iframeId);
        iframeLogo.isExisting();
        browser.pause(2000);
        await browser.switchToFrame(iframeId);
        await iframePage.readInnerHeaderIframe.waitForDisplayed();
        await browser.switchToParentFrame();
        //const val = await $("//p[contains(text(),'IFrame example below can be used for testing purposes.')]");
        //const val1 = await val.getText();
        //await expect(val1).toHaveTextContaining('testing purposes.')
    });

    
});