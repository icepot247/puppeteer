// import puppeteer from "puppeteer";
const puppeteer = require('puppeteer');
const mobile = '01752720020';
const content =  'test'


const browser = await puppeteer.launch({
  "headless": "new",
  "args": ["--fast-start", "--disable-extensions", "--no-sandbox"],
  "ignoreHTTPSErrors": true
});

const page = await browser.newPage();
await page.goto('https://sandbox.httpsms.com/');
await page.waitForSelector('.mdi-plus.mdi.v-icon.notranslate.v-theme--dark.v-icon--size-default');
await page.click('.mdi-plus.mdi.v-icon.notranslate.v-theme--dark.v-icon--size-default');

await page.click("input[type=\"tel\"]")
await page.keyboard.type('+88'+mobile);
await page.keyboard.press('Tab');

await page.keyboard.type(content);
await page.keyboard.press('Enter');
await page.keyboard.type('-- presented by introbe');

await page.keyboard.press('Tab');
await page.keyboard.press('Enter');

await Promise.all([
  page.waitForNavigation(),
  page.waitForSelector('.v-snackbar__content')
]);
await browser.close();
