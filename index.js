const express = require("express");
const database = require("./config/database");
const characterRoutes = require("./routes/characterRoutes");
const villageRoutes = require("./routes/villageRoutes");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const path = require("path");

const app = express();

const swaggerDocument = path.join(__dirname, "swagger.json");

app.use("/swagger.json", express.static(swaggerDocument));

const customCssUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";


const options = {
  swaggerOptions: {
    url: "/swagger.json", 
  },
  customCssUrl, 
  customJs: `
    var script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.min.js';
    document.head.appendChild(script1);

    var script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.min.js';
    document.head.appendChild(script2);

    var script3 = document.createElement('script');
    script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-init.js';
    document.head.appendChild(script3);
  `,

  customSiteTitle: "Minha API - Documentação",
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(null, options));

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(characterRoutes);
app.use(villageRoutes);

app.listen(port, async () => {
  await database.connect();
  console.log(`Exemplo de app rodando em http://localhost:${port}`);
});
