const express = require('express');
const path = require('path');
const { Cliente } = require('pg');
const app = express();
const PORT = 3000;

const cliente = new Cliente ({
     user: 'postgres',
     host: 'localhost',
     database: 'ARQWEB_TP',
     password: '12345678',
     port: 5432
})

cliente.connect()
.then(() => console.log("Conexión exitosa a PostgreSQL"))
.catch(err => console.error("Error de conexión", 
err.stack));

app.use(express.json());

let usuarios = [];

//Crear una nuevo usuario
app.post('/usuarios', (req, res) => {
    const { nombre, descripcion } = req.body;
    const nuevaTarea = { id: tareas.length + 1, nombre, descripcion };
    tareas.push(nuevaTarea);
    res.status(200).json(nuevaTarea);
});

//Leer todas las tareas
app.get('/usuarios', (req, res) => {
    res.json(tareas);
})

//Actualizar una tarea existente
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, role, pass } = req.body;
    const usuario = usuarios.find(t => t.id === parseInt(id));

    if(!usuario)
    {
        return res.status(404).json({error: 'Usuario no encontrada'});
    }

    usuario.name = name;
    usuario.pass = pass;
    usuario.email = email;
    usuario.role = role;
    res.json(usuario);
})

//Eliminar una tarea
app.delete('/usuarios/:id', (req, res) => {
    const { id }  = req.params;
    const index = tareas.findIndex(t => t.id === parseInt(id));

    if(index === -1)
    {
        return res.status(404).json({error: 'Tarea no encontrada'});
    }

    tareas.splice(index, 1);
    res.status(204).send();
})

//Configuración del servidor para escuchar en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});