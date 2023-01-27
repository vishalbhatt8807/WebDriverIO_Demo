import contactPage from "../pages/contact-page";
import {faker} from '@faker-js/faker';


describe('Contact page', () => {
    beforeEach(async () =>{

        await browser.url('/contact/');
    });

    
    it('Fill form and assert message', async() => {
       
        
        await contactPage.submitForm(faker.name.firstName(),faker.internet.email(),faker.phone.phoneNumber(),faker.lorem.paragraphs(2))
        
        //debug
       // await browser.debug();
        const text = await contactPage.getAlertMsg;
        await expect(text).toHaveTextContaining("Thanks for contacting us! We will be in touch with you shortly")
    });
});