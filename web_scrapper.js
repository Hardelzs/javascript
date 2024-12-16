/**
 * scrapper-javascript.js
 * To run this script, copy and paste `node web_scrapper.js` in the terminal
 */

const cheerio = require("cheerio");
const { title } = require("process");


(async() => {
    const url = "https://www.google.com";
    const response = await fetch(url);

    const $ = cheerio.load(await response.text());
    console.log($.html())
})();

