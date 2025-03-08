const { Sequelize } = require("sequelize");
require("dotenv").config();

class Database {
  constructor() {
    this.sequelize = new Sequelize(process.env.DB_URL, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Necessário para Neon Tech
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
