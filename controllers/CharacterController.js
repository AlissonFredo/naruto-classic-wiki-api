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

  async find(req, res) {
    try {
      const { id } = req.params;
      const character = await Character.findByPk(id);

      if (character === null) {
        return res.status(404).json({ error: "Character not found" });
      }

      return res.status(200).json(character);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error finding id character" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const response = await Character.destroy({ where: { id: id } });

      if (!response) {
        return res.status(400).json({ error: "Character bad request" });
      }

      return res.status(200);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error deleting character" });
    }
  }
}

module.exports = new CharacterController();
