class ContactPage{

    get enterName(){
        return $('//*[@id="evf-277-field_ys0GeZISRs-1"]');
    }
    
    get enterEmail(){
        return $('//*[@id="evf-277-field_LbH5NxasXM-2"]');
    }
    
    get enterContact(){
        return $('//*[@id="evf-277-field_66FR384cge-3"]');
    }
    
    get enterComment(){
        return $('//*[@id="evf-277-field_yhGx3FOwr2-4"]');
    }

    get clickSubmit(){
        return $('//*[@id="evf-submit-277"]')
    }

    get getAlertMsg(){
        return $('[role=alert]');
    }

    async submitForm(name,email,contact,message){
        await this.enterName.setValue(name);
        await this.enterEmail.setValue(email);
        await this.enterContact.setValue(contact);
        await this.enterComment.setValue(message);
        await this.clickSubmit.click();
    }
}
export default new ContactPage();