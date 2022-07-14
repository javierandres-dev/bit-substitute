const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userSchema = require('../models/users');
const users = require('../models/users');

/* Create-Read-Update-Delete */
// Create
router.post('/users', async (request, response) => {
  try {
    ////console.log(request.body);
    const hash = await bcryptjs.hash(request.body.password, 10);
    ////console.log(hash);
    //response.send('crear usuario...');
    ////console.log(request.body);
    const newUser = userSchema({ ...request.body, password: hash });
    //const newUser = userSchema(request.body);
    /*
  Promesa:
  1. Pendiente por hacer
  2. Lo hizo => then
  3. No lo hizo => catch
  */
    newUser
      .save()
      .then((data) => {
        response.json({ success: data });
      })
      .catch((error) => {
        response.json({ failured: error });
      });
  } catch (error) {
    response.json({ failured: error, description: 'Falló el try' });
  }
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
router.put('/users/:id', async (request, response) => {
  //response.send('Actualizar un usuario específico.');
  const { id } = request.params;
  //console.log('id:', id);
  const hash = await bcryptjs.hash(request.body.password, 10);
  const user = { ...request.body, password: hash };
  //console.log('user:', user);
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
// Login
router.post('/login', async (request, response) => {
  try {
    console.log(request.body);
    const user = await userSchema.findOne({
      email: request.body.email,
    });
    //console.log(user);
    if (user) {
      const isEqual = await bcryptjs.compare(
        request.body.password,
        user.password
      );
      //console.log(isEqual);
      if (isEqual) {
        //response.json({ success: user._id });
        //response.json({ success: user });
        const token = jwt.sign(
          {
            name: user.firstName,
          },
          'llaveSecreta'
        );
        response.json({ token });
      } else {
        response.json({ message: 'Contraseña incorrecta.' });
      }
    } else {
      response.json({ message: 'El usuario no existe.' });
    }
  } catch (error) {
    response.json({ failured: error, description: 'Falló el try' });
  }
});
module.exports = router;
