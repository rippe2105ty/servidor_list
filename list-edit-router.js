// Importa express y crea tu router
const express = require('express');
const listEditRouter = express.Router();

// Middleware para manejar errores en solicitudes POST y PUT
listEditRouter.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Cuerpo de solicitud vacío' });
    }

    // Verifica si la solicitud contiene la información necesaria
    if (!req.body.task || !req.body.description) {
      return res.status(400).json({ error: 'Información no válida o faltante para crear tareas' });
    }
  }

  next();
});

// Rutas y controladores de list-edit-router aquí...

module.exports = listEditRouter;
