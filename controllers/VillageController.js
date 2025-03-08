const Village = require("../models/Village");

class VillageController {
  async findAll(req, res) {
    try {
      const { page } = req.query;

      if (isNaN(page) || page < 1) {
        return res.status(400).json({ error: "Page must be a valid number" });
      }

      const limit = 6;
      const offset = (parseInt(page) - 1) * limit;

      const result = await Village.findAndCountAll({
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
      return res.status(500).json({ error: "Error finding all villages" });
    }
  }

  async find(req, res) {
    try {
      const { id } = req.params;

      if (isNaN(id) || id < 1) {
        return res.status(400).json({ error: "Id must be a valid number" });
      }

      const village = await Village.findByPk(id);

      if (village === null) {
        return res.status(404).json({ error: "Village not found" });
      }

      return res.status(200).json(village);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error finding id village" });
    }
  }
}

module.exports = new VillageController();
