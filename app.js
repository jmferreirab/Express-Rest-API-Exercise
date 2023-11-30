// Cargar la libreria express para crear un servidor
const express = require("express");
// Crear aplicación servidor
const app = express();
const port = 10000;

// Configurar respuesta a generar en el servidor
// para solicitudes en la ruta '/'
app.get("/", (req, res) => {
  let timestamp = new Date();
  let content = `Esta la respuesta a solicitud.<br>${timestamp}`;
  res.send(content);
});

// Indicar al servidor que escuche en el puerto especificado
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
