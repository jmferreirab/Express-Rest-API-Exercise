// Se carga la libreria express para crear un servidor
const express = require("express");
// Se carga la libreria mongoose para interactuar con mongodb
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Se carga el router con la logica del endpoint de posts
const postRouter = require("./routes/post");

// Se crea la aplicación servidor
const app = express();
const port = 10000;

app.use(bodyParser.json());

app.use("/servicios", postRouter);

// Configurar respuesta a generar en el servidor
// para solicitudes en la ruta '/'
app.get("/", (req, res) => {
  let timestamp = new Date();
  let content = `Esta la respuesta a solicitud.<br>${timestamp}`;
  res.send(content);
});

// Indicar al servidor que escuche en el puerto especificado
app.listen(port, () => {
  console.log(`La aplicación fue lanzada en: http://localhost:${port}`);
});

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database_name = process.env.DB_NAME;
const host = process.env.DB_HOST;
const uri = `mongodb+srv://${user}:${password}@${host}/${database_name}\
?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Conectado a mongodb");
  })
  .catch((err) => {
    console.error("Error al conectar a mongodb", err);
  });
