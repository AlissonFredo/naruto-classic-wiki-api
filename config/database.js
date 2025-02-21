const { Sequelize } = require("sequelize");
require("dotenv").config();

class Database {
  constructor() {
    this.sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false,
      }
    );
  }

  async connect() {
    try {
      await this.sequelize.authenticate();
      console.log("Connected to database");
    } catch (error) {
      console.log("Error connecting to database: ", error);
    }
  }
}

module.exports = new Database();
