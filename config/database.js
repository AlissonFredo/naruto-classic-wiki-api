const { Sequelize } = require("sequelize");
const neon = require('@neondatabase/serverless');
require("dotenv").config();

class Database {
  constructor() {
    this.sequelize = new Sequelize(process.env.DB_URL, {
      dialect: "postgres",
      dialectModule: neon,
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
      console.log("Connected to PostgreSQL database");
    } catch (error) {
      console.error("Error connecting to database: ", error);
    }
  }
}

module.exports = new Database();
