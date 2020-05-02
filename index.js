const express = require('express')
const puppeteer = require('puppeteer');
const app = express()
const port = 3000

var getData = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://pawel-wrzosek.pl');
    const launch = await page.evaluate(() => {
        var result = [];
        var allHrefs = document.querySelectorAll('a[href]')
        allHrefs.forEach(el => {
            result.push({
                href: el.href,
                txt: el.textContent.trim()
            })
        })
        return `<div>${JSON.stringify(result, null, 2)}</div>`
    });
    await browser.close();
    return launch
  };

  app.get('/', function (req, res) {
    res.send(`response = ${getData()}`)
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))