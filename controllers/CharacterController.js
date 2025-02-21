const Character = require("../models/Character");

class CharacterController {
  async create(req, res) {
    try {
      const { name, about } = req.body;
      const character = await Character.create({ name, about });
      return res.status(201).json(character);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ error: "Error creating character" });
    }
  }
}

module.exports = new CharacterController();
