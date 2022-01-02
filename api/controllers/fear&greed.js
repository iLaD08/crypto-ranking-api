const getFng = require("../utils/getFng");
const getDetailedFng = require("../utils/getDetailedFng");

exports.defaultFng = async (req, res) => {
  try {
    const fngData = await getFng();

    return res.status(200).json(fngData);
  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
};

exports.detailedFng = async (req, res) => {
  const limit = req.params.limit;

  try {
    const fngData = await getDetailedFng(limit);

    return res.status(200).json(fngData);
  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
};
