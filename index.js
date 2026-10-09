const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Toma el parámetro "nombre" de la URL, o usa "invitado" si no hay nada
  const nombre = req.query.nombre || 'invitado';
  // Responde solo con el texto. El código de arriba nunca se envía al navegador.
  res.send(`hola, ${nombre}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});