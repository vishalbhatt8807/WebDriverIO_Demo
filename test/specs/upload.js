const path = require('path');
describe('Simple Upload operation', () => {
    itz('Perform Simple Upload Operation on visible ChooseFile option', async() => {
        await browser.url("https://the-internet.herokuapp.com/upload");
        console.log(__dirname)
        const filePath = path.join(__dirname,"../data/Test.png");

        //upload test file
        const remotefilepath = await browser.uploadFile(filePath);

        //set file path value in the input field
        await $('#file-upload').setValue(remotefilepath);
        await $('#file-submit').click()
        expect(await $('h3').getText()).toHaveText("File Uploaded!");
        
    });

        it.only('Perform Simple Upload Operation on visible ChooseFile option', async() => {
            await browser.url("/cart/");
            console.log(__dirname)
            const filePath = path.join(__dirname,"../data/Test.png");
    
            //upload test file
            const remotefilepath = await browser.uploadFile(filePath);
            //Remove file hiddle class for choose file option
            await browser.execute("document.querySelector('#upfile_1').className=''");
    
            //set file path value in the input field
            await $('#upfile_1').setValue(remotefilepath);
            await $('#upload_1').click()
            expect(await $('#wfu_messageblock_header_1_label_1').getText()).toHaveTextContaining("uploaded successfully");
        });
});