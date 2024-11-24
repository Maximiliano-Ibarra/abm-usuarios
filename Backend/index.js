const express = require('express');
const dbconnection = require('sequelize');
const routes = require('./routes/usersRouter');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', routes);

dbconnection.sync()
            .then(()=>console.log('Sincronización con Base de datos correcta')
            .catch(error => console.log('Error en la sincronización con la Base de datos', error))
            )

//Configuración del servidor para escuchar en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});