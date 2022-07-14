const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const usersRouter = require('./routes/users');

const server = express();
const port = 4000;

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a la base de datos.');
  })
  .catch(() => {
    console.log('Error al conectar a la base de datos');
  });

server.use(cors());
server.use(express.json());
server.use('/api/v1', usersRouter);

server.get('/', (request, response) => {
  response.send('Hola desde la raíz.');
});

server.listen(port, () => {
  console.log('Servidor corriendo en el puerto:' + port);
});
