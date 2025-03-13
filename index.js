const express = require("express");
const database = require("./config/database");
const characterRoutes = require("./routes/characterRoutes");
const villageRoutes = require("./routes/villageRoutes");
const cors = require("cors");

const swaggerUi = require('swagger-ui-express');
const path = require("path");

const app = express();

// Caminho para o arquivo swagger.json
const swaggerDocument = path.join(__dirname, "swagger.json");

// Servir o arquivo swagger.json na rota /swagger.json
app.use("/swagger.json", express.static(swaggerDocument));

// URL do CSS e JS personalizados
const customCssUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const customJsUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.min.js"; // Exemplo de URL para importar JS

// Configuração do Swagger UI com as URLs personalizadas
const options = {
  swaggerOptions: {
    url: "/swagger.json", // URL do swagger.json
  },
  customCssUrl, // Carregar o CSS do CDN
  customJs: `
    // Importa o script externo para o Swagger UI
    const script = document.createElement('script');
    script.src = '${customJsUrl}';
    script.onload = () => {
      console.log('Swagger UI Bundle JS carregado com sucesso!');
    };
    document.head.appendChild(script);
  `,
  customSiteTitle: "Minha API - Documentação",
};

// Configurar o Swagger UI
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
