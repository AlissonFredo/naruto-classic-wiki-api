const express = require("express");
const CharacterController = require("../controllers/CharacterController");

const router = express.Router();

router.post("/characters", CharacterController.create);

module.exports = router;
