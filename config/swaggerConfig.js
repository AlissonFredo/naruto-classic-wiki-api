const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

class SwaggerConfig {
  constructor() {
    this.options = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Naruto Classic Wiki API",
          version: "1.11.0",
          description: "The Naruto Classic Wiki API is a RESTful API that provides endpoints for managing information about Naruto Classic characters.",
        },
        servers: [
          {
            url: "https://naruto-classic-wiki-api.vercel.app/",
          },
        ],
      },
      apis: ["./routes/*.js"],
    };

    this.swaggerSpec = swaggerJsDoc(this.options);
  }

  setup(app) {
    app.use("/", swaggerUi.serve, swaggerUi.setup(this.swaggerSpec));
  }
}

module.exports = new SwaggerConfig();
