const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Simulo una base de datos en memoria
let usuarios = [];

// Ruta para registro
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    // Verifico si el usuario ya existe
    const usuarioExistente = usuarios.find(u => u.username === username);
    if (usuarioExistente) {
        return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Encripto la contraseña
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    // Almaceno el nuevo usuario
    usuarios.push({ username, password: hashedPassword });
    
    res.status(201).json({ message: 'Usuario registrado con éxito' });
});

// Inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Buscar el usuario
    const usuario = usuarios.find(u => u.username === username);
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = bcrypt.compareSync(password, usuario.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar un token (opcional)
    const token = jwt.sign({ username }, 'mi_clave_secreta', { expiresIn: 86400 });
    
    res.status(200).json({ message: 'Autenticación satisfactoria', token });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


//{
//  "username": "leonardo",
//  "password": "leo123456"
//  }