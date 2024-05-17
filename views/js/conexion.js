const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', function() {
  console.log('Conexión a la base de datos MongoDB establecida');
});

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Middleware para procesar datos JSON
app.use(express.json());

// Ruta para manejar el registro de usuarios
app.post('/registro', (req, res) => {
  const { fullName, email, password } = req.body;
  const newUser = new User({ fullName, email, password });

  // Guardar el nuevo usuario en la base de datos MongoDB
  newUser.save((err, savedUser) => {
    if (err) {
      console.error('Error al guardar usuario en MongoDB: ', err);
      res.status(500).send('Error al procesar la solicitud');
      return;
    }
    console.log('Usuario registrado correctamente en MongoDB');
    res.status(200).send('Usuario registrado correctamente');
  });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
