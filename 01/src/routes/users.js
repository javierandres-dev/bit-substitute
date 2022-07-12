const express = require('express');
const router = express.Router();
const userSchema = require('../models/users');

/* Create-Read-Update-Delete */
// Create
router.post('/users', (request, response) => {
  response.send('crear usuario...');
  console.log(request.body);
  //const newUser =
});
// Read
router.get('/users', (request, response) => {
  response.send('Leer todos los usuarios...');
});
router.get('/users/:id', (request, response) => {
  response.send('Leer un usuario específico.');
});
// Update
router.put('/users/:id', (request, response) => {
  response.send('Actualizar un usuario específico.');
});
// Delete
router.delete('/users/:id', (request, response) => {
  response.send('Eliminar un usuario específico.');
});

module.exports = router;
