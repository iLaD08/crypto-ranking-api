const axios = require("axios");

module.exports = async (coinSlug) => {
  try {
    const siteUrl = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=8708&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all&audited=false&aux=ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap`;

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });

    const coin = data.data.cryptoCurrencyList.filter(
      (coin) => coin.slug === coinSlug
    );

    coin[0].logo = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin[0].id}.png`;

    return coin[0];
  } catch (err) {
    return err;
  }
};
