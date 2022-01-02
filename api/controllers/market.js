const getStats = require("../utils/getStats");
const getPriceFeed = require("../utils/getPriceFeed");
const getCoin = require("../utils/getCoin");

exports.statesRoute = async (req, res) => {
  try {
    const statsData = await getStats();

    return res.status(200).json(statsData);
  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
};

exports.pricesRoute = async (req, res) => {
  const min = req.params.min;
  const max = req.params.max;

  try {
    const priceFeed = await getPriceFeed(min, max);

    return res.status(200).json(priceFeed);
  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
};

exports.coinRoute = async (req, res) => {
  const coinSlug = req.params.coin_slug;

  try {
    const coinData = await getCoin(coinSlug);

    return res.status(200).json(coinData);
  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
};
