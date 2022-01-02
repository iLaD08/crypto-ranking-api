const axios = require("axios");

module.exports = async (limit) => {
  try {
    const siteUrl = `https://api.alternative.me/fng/?limit=${limit}`;

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });

    return data.data;
  } catch (err) {
    return err;
  }
};
