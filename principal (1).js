const express = require('express');
const app = express();

app.use(express.json());

// Middleware para validar solicitudes HTTP válidas
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT') {
    return res.status(400).json({ error: 'Método HTTP no válido' });
  }
  next();
});

// Otros enrutadores y middlewares aquí...

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
