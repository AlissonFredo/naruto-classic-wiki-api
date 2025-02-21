const express = require("express");
const CharacterController = require("../controllers/CharacterController");

const router = express.Router();

router.post("/characters", CharacterController.create);
router.get("/characters", CharacterController.findAll);

module.exports = router;
