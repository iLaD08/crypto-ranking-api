const axios = require("axios");

module.exports = async () => {
  try {
    const siteUrl = `https://api.alternative.me/fng/`;

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });

    return data.data[0];
  } catch (err) {
    return err;
  }
};
