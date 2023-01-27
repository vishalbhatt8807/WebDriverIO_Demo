import blogPage from "../pages/blog-page";
describe('Blog page', () => {
    it('Go to to Blog Page and assert contain length', async() => {
        await browser.url('/blog');
       const ele = await blogPage.getBlogDetail;
       for (const item of ele){
        const eleText = await item.getText();
        await expect(eleText.length).toBeGreaterThan(10);
       }
       await expect(ele).toHaveLength(5);
    });
});