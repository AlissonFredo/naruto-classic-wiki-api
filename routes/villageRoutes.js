const express = require("express");
const VillageController = require("../controllers/VillageController");

const router = express.Router();

router.get("/villages", VillageController.findAll);
router.get("/villages/:id", VillageController.find);

module.exports = router;
