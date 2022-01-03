const axios = require("axios");

module.exports = async (min, max) => {
  try {
    const siteUrl = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${min}&limit=${max}&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all&audited=false?aux=logo,urls,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap`;

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });

    return data.data.cryptoCurrencyList;
  } catch (err) {
    return err;
  }
};
