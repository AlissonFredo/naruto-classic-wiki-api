const { Sequelize } = require("sequelize");
const pg = require('pg');
require("dotenv").config();

class Database {
  constructor() {
    this.sequelize = new Sequelize(process.env.DB_URL, {
      dialect: "postgres",
      dialectModule: pg,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: false,
    });
  }

  async connect() {
    try {
      await this.sequelize.authenticate();
    } catch (error) {
      console.error("Error connecting to database: ", error);
    }
  }
}

module.exports = new Database();
