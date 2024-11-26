import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcrypt';
import usersRouter from './routes/usersRouter.js';
import { sequelize } from './config/connection.js';
const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use('/api', usersRouter);

sequelize.sync()
            .then(()=> { console.log('Sincronización con Base de datos correcta') } )
            .catch(error => { console.log('Error en la sincronización con la Base de datos', error) })

//Configuración del servidor para escuchar en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});