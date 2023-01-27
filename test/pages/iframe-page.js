class IframePage{
    get iframeId(){
        return $('#advanced_iframe');
    }

    get iframeLogo(){
        return $('#site-logo');
    }

    get clickOnLearnMoreBtn(){
        return $('//a[@href="https://academy.sdetunicorns.com" and @data-wpel-link="external"]');
    }

    get clickOnSignInIconOnNewWindow(){
        return $('//a[@href="/sign_in"]');
    }

    get readInnerHeaderIframe(){
        return $('//*[@id="site-header-inner"]/div[3]/a/div/div');
    }
}

export default new IframePage();