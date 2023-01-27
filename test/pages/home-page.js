import navComp from "./component/nav-comp";

class HomePage{

    open(){
        return browser.url('/')
    }

    get btnGetStarted(){
        return $('#get-started'); 
    }

    get clickOnHomePageIcon(){
        return $('//*[@id="masthead"]/div/div/div[1]/div/a');
    }

    get getHeadingText(){
        return $('.elementor-widget-container h1');
    }

    get NavComponent(){
        return navComp;
    }
}

export default new HomePage();