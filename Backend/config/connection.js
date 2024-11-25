import { Sequelize } from 'sequelize';

const sequelize = new Sequelize ('ARQWEB_TP', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
        .then(() => {
            console.log('Conexión establecida correctamente.');
        })
        .catch(err => {
            console.error('No se pudo conectar a la base de datos:', err);
        });

export { sequelize };