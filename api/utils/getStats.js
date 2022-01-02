const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async () => {
  try {
    const siteUrl = "https://cryptoslate.com/coins/";

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });

    const $ = cheerio.load(data);
    const elemSelector = "#pagetitle > div > div > div > span.value";

    const keys = [
      "marketCap",
      "volume",
      "dominance",
      "totalCryptos",
      "totalTokens",
      "totalPowCoins",
      "totalPosCoins",
    ];

    let statsArr = [];

    let keyIdx = 0;
    let stateObj = {};
    $(elemSelector).each((parentIdx, parentData) => {
      stateObj[keys[keyIdx]] = $(parentData).text();

      keyIdx++;
    });
    statsArr.push(stateObj);

    return statsArr[0];
  } catch (err) {
    return err;
  }
};
