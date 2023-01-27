import HomePage from '../pages/home-page';

describe('Home page', () => {

   beforeEach(async ()=>{
      //open home page
      await HomePage.open()
   })

   it("Verify title in homepage", async() => {
      // await browser.url('https://practice.automationbro.com/');
     
       await expect(browser).toHaveTitle("Practice E-Commerce Site – Automation Bro");
    })

    xit("Verify title in about page", async() => {
        await browser.url('https://practice.automationbro.com/about/');
        await expect(browser).toHaveUrl("https://practice.automationbro.com/about/");
     })

     it("Click on get Started and validate Url", async() => {
      await HomePage.btnGetStarted.click();
      //await $('#get-started').click();
        await expect(browser).toHaveUrlContaining("get-started");
        await HomePage.clickOnHomePageIcon.click();
        await expect(browser).not.toHaveUrlContaining("get-started");
        
     })

     it("Find the heading element and assert text", async() => {
        //const headingEl = await $('.elementor-widget-container h1'); 
        const headingEl = await HomePage.getHeadingText;
        const headingText = await headingEl.getText();
        await expect(headingText).toEqual('Think different. Make different!');
        //Another way is
        await expect(headingEl).toHaveText('Think different. Make different.');
     })
});

