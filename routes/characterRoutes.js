const express = require("express");
const CharacterController = require("../controllers/CharacterController");

const router = express.Router();

router.get("/characters", CharacterController.findAll);
router.get("/characters/:id", CharacterController.find);

module.exports = router;
