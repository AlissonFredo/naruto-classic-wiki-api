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

  async findAll(req, res) {
    try {
      const characters = await Character.findAll();
      return res.status(200).json(characters);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error finding all characters" });
    }
  }
}

module.exports = new CharacterController();
