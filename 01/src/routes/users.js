const express = require('express');
const router = express.Router();
const userSchema = require('../models/users');

/* Create-Read-Update-Delete */
// Create
router.post('/users', (request, response) => {
  //response.send('crear usuario...');
  //console.log(request.body);
  const newUser = userSchema(request.body);
  /*
  Promesa:
  1. Pendiente
  2. Si cumplió => then
  3. No cumplió => catch
  */
  newUser
    .save()
    .then((data) => {
      response.json({ success: data });
    })
    .catch((error) => {
      response.json({ failured: error });
    });
});
// Read
router.get('/users', (request, response) => {
  //response.send('Leer todos los usuarios...');
  userSchema
    .find()
    .then((data) => {
      response.json({ success: data });
    })
    .catch((error) => {
      response.json({ failured: error });
    });
});
router.get('/users/:id', (request, response) => {
  //response.send('Leer un usuario específico.');
  const { id } = request.params;
  userSchema
    .findById(id)
    .then((data) => {
      response.json({ success: data });
    })
    .catch((error) => {
      response.json({ failured: error });
    });
});
// Update
router.put('/users/:id', (request, response) => {
  //response.send('Actualizar un usuario específico.');
  const { id } = request.params;
  console.log('id:', id);
  const user = userSchema(request.body);
  console.log('user:', user);
  userSchema
    .updateOne({ _id: id }, { $set: user })
    .then((data) => {
      response.json({ success: data });
    })
    .catch((error) => {
      response.json({ failured: error });
    });
});
// Delete
router.delete('/users/:id', (request, response) => {
  //response.send('Eliminar un usuario específico.');
  const { id } = request.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => {
      response.json({ success: data });
    })
    .catch((error) => {
      response.json({ failured: error });
    });
});

module.exports = router;
