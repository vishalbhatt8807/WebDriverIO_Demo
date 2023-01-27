import homePage from "../pages/home-page";

describe('Navigation function', () => {
    it('Navigate to menus and assert all navigated menu', async() => {
       //Wait Commands
        // browser.pause(2000)
       //await browser.url('/'); 
       await homePage.open();
        
       const expectedLinks =[
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const actualLinks =[];
       // await $('#primary-menu').waitForDisplayed({2000:"Failed due to invalid locator"})
       // await $('#primary-menu').waitForEnabled();
       // await $('#primary-menu').waitForExist();
       // await $('#primary-menus li').waitForClickable();
       // const navLinks = await $('#primary-menu').$$('li[id*=menu]');

       //Wait until Home tab is display on screen, Alway recommend to add timeout message.
       await browser.waitUntil(async ()=>{
      //  const hometest = await $('#primary-menu li').getText();
      const hometest = await homePage.NavComponent.firstNavMenu.getText();
        return hometest === "Home"; //This will return true or false
        },{
            timeout: 5000,
            timeoutMsg:'Could not verify Home text from #primary-menu li'
    })
       //const navLinks = await $$('#primary-menu li[id*=menu]');
       const navLinks = await homePage.NavComponent.linksNavMenu;
        for(const link of  navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(actualLinks).toEqual(expectedLinks);
    });
});
