var puppeteer = require('puppeteer');
exports.getData = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const launch = await page.evaluate(() => {
        let result = [];
        let allHrefs = document.querySelectorAll('a[href]');
        allHrefs.forEach((el) => {
            result.push({
                href: el.href,
                txt: el.textContent.trim(),
            });
        });
        return `${JSON.stringify(result, null, 4)}`;
    });
    await browser.close();
    return launch;
};
