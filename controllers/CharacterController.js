const Character = require("../models/Character");

class CharacterController {
  async create(req, res) {
    try {
      const { name, about, url } = req.body;
      const character = await Character.create({ name, about, url });
      return res.status(201).json(character);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error creating character" });
    }
  }

  async findAll(req, res) {
    try {
      const { page } = req.query;
      const limit = 6;
      const offset = (parseInt(page) - 1) * limit;

      const result = await Character.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [["name", "ASC"]],
      });

      const totalPages = Math.ceil(result.count / limit);

      return res.status(200).json({
        totalRecords: result.count,
        totalPages: totalPages,
        currentPage: page,
        data: result.rows,
      });
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

      return res.status(200).json();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error deleting character" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const character = await Character.findByPk(id);

      if (!character) {
        return res.status(404).json({ error: "Character not found" });
      }

      const { name, about, url } = req.body;
      character.name = name;
      character.about = about;
      character.url = url;
      await character.save();
      return res.status(200).json(character);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error updating character" });
    }
  }
}

module.exports = new CharacterController();
