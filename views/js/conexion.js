const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5500;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });
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
app.use(express.urlencoded({ extended: true })); // Añadir esto para manejar datos de formulario

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
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
    res.redirect('/tallerl'); // Redirigir a taller.html después del registro exitoso
  });
});

// Servir archivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static('public')); // Asegúrate de que tus archivos estáticos estén en una carpeta llamada 'public'

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
