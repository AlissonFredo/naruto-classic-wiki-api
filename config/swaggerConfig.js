// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// class SwaggerConfig {
//   constructor() {
//     this.options = {
//       definition: {
//         openapi: "3.0.0",
//         info: {
//           title: "Naruto Classic Wiki API",
//           version: "1.11.0",
//           description: "The Naruto Classic Wiki API is a RESTful API that provides endpoints for managing information about Naruto Classic characters.",
//         },
//         servers: [
//           {
//             url: "https://naruto-classic-wiki-api.vercel.app/",
//           },
//         ],
//       },
//       apis: ["./routes/*.js"],
//     };

//     this.swaggerSpec = swaggerJsDoc(this.options);
//   }

//   setup(app) {
//     app.use("/", swaggerUi.serve, swaggerUi.setup(this.swaggerSpec));
//   }
// }

// module.exports = new SwaggerConfig();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const express = require("express");

class SwaggerConfig {
  constructor() {
    this.options = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Naruto Classic Wiki API",
          version: "1.11.0",
          description:
            "The Naruto Classic Wiki API is a RESTful API that provides endpoints for managing information about Naruto Classic characters.",
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
    // Servindo o Swagger JSON
    // app.use(
    //   "/swagger.json",
    //   express.static(path.join(__dirname, "swagger.json"))
    // );

    // Servindo o arquivo de script customizado
    app.use(
      "/swagger-custom.js",
      express.static(path.join(__dirname, "swagger-custom.js"))
    );

    // Configurações adicionais do Swagger
    const options = {
      customCssUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
      customJs: "/swagger-custom.js",
    };

    // Configurando o Swagger UI
    app.use("/", swaggerUi.serve, swaggerUi.setup(this.swaggerSpec, options));
  }
}

module.exports = new SwaggerConfig();
