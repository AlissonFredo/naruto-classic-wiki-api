const express = require("express");
const database = require("./config/database");
const characterRoutes = require("./routes/characterRoutes");
const villageRoutes = require("./routes/villageRoutes");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/swagger.json", express.static(path.join(__dirname, "swagger.json")));
app.use(
  "/swagger-custom.js",
  express.static(path.join(__dirname, "swagger-custom.js"))
);

const options = {
  swaggerOptions: {
    url: "/swagger.json",
  },
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
  customJs: "/swagger-custom.js",
};

app.use("/", swaggerUi.serve, swaggerUi.setup(null, options));

app.use(express.json());
app.use(cors());
app.use(characterRoutes);
app.use(villageRoutes);

app.listen(port, async () => {
  await database.connect();
  console.log(`Exemplo de app rodando em http://localhost:${port}`);
});
