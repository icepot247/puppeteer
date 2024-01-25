import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: false , devtools: false});

const page = await browser.newPage();
await page.goto('https://sandbox.httpsms.com/');
await page.waitForSelector('.mdi-plus.mdi.v-icon.notranslate.v-theme--dark.v-icon--size-default');
await page.click('.mdi-plus.mdi.v-icon.notranslate.v-theme--dark.v-icon--size-default');

await page.click("input[type=\"tel\"]")
await page.keyboard.type('+8801752720000');
await page.keyboard.press('Tab');

await page.keyboard.type('Your sms body ');
await page.keyboard.press('Enter');
await page.keyboard.type('-- presented by introbe');

await page.keyboard.press('Tab');
await page.keyboard.press('Enter');

await Promise.all([
  page.waitForNavigation(),
  page.waitForSelector('.v-snackbar__content')
]);
await browser.close();