const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `https://localhost:${port}/`);

  if (url.pathname === "/user") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");
    const response = JSON.stringify({ "name": name, "email": email });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(response);
  } else {
    res.writeHead(200);
    res.end();
  }
};

const server = http.createServer(requestListener);
module.exports = server;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Lista de tareas
const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Lavar el coche', completed: true },
  { id: 3, description: 'Estudiar para el examen', completed: false }
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

