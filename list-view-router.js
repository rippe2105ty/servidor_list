// Importa express y crea tu router
const express = require('express');
const listViewRouter = express.Router();

// Middleware para gestionar parámetros incorrectos
listViewRouter.use((req, res, next) => {
  const id = req.params.id;

  // Verifica si el parámetro "id" es un número
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ error: 'Parámetro no válido' });
  }

  next();
});

// Rutas y controladores de list-view-router aquí...

module.exports = listViewRouter;
