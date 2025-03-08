const express = require("express");
const CharacterController = require("../controllers/CharacterController");

const router = express.Router();

router.put("/characters/:id", CharacterController.update);
router.get("/characters", CharacterController.findAll);
router.get("/characters/:id", CharacterController.find);
router.delete("/characters/:id", CharacterController.destroy);

module.exports = router;
