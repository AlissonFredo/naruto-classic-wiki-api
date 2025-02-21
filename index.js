const express = require("express");
const database = require("./config/database");
const characterRoutes = require("./routes/characterRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(characterRoutes);

// app.use(express.urlencoded({ extended: true })); // Suporte para dados via formulário

// app.get("/", (req, res) => {
//   res.send("Olá Mundo!");
// });

// app.post("/characters", (req, res) => {
//   const { name, about } = req.body;

//   console.log(name, about);

//   res.send(`Cadastrar character ${name}`);
// });

app.listen(port, async () => {
  await database.connect();
  console.log(`Exemplo de app rodando em http://localhost:${port}`);
});
