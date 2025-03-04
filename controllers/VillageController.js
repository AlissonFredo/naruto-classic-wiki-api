const Village = require("../models/Village");

class VillageController {
  async findAll(req, res) {
    try {
      const { page } = req.query;
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
}

module.exports = new VillageController();
