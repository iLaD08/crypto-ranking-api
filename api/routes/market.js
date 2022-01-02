const express = require("express");
const router = express.Router();

const {
  statesRoute,
  pricesRoute,
  coinRoute,
} = require("../controllers/market");

router.get("/", (req, res) => {
  res.status(200).json({
    message: `This is /market page to get data visit /market/list or /market/stats`,
  });
});

// gives you market stats
router.get("/stats", statesRoute);

// give you amout of coins you typed
router.get("/list/:min/:max", pricesRoute);

// search a spesific coin
router.get("/list/:coin_slug", coinRoute);

module.exports = router;
