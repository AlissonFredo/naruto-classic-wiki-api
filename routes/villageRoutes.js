const express = require("express");
const VillageController = require("../controllers/VillageController");

const router = express.Router();

router.get("/villages", VillageController.findAll);

module.exports = router;
