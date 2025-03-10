const express = require("express");
const database = require("./config/database");
const characterRoutes = require("./routes/characterRoutes");
const villageRoutes = require("./routes/villageRoutes");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(characterRoutes);
app.use(villageRoutes);

app.listen(port, async () => {
  await database.connect();
  console.log(`Exemplo de app rodando em http://localhost:${port}`);
});
