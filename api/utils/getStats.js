const axios = require("axios");

module.exports = async () => {
  try {
    const siteUrl = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=500&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all&audited=false&aux=ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap`;

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });

    let statsData = {
      totalCoins: data.data.totalCount,
      marketCap: 0,
      volume: 0,
    };

    data.data.cryptoCurrencyList.map(async (item) => {
      let { marketCap, volume } = statsData;

      statsData.marketCap = marketCap + parseFloat(item.quotes[0].marketCap);
      statsData.volume = volume + parseFloat(item.quotes[0].volume24h);
    });

    return statsData;
  } catch (err) {
    return err;
  }
};
