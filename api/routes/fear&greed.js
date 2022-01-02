const express = require("express");
const router = express.Router();

const { defaultFng, detailedFng } = require("../controllers/fear&greed");

// get today's fear & greed meeter
router.get("/", defaultFng);

// Limit the number of returned results
router.get("/:limit", detailedFng);

module.exports = router;
