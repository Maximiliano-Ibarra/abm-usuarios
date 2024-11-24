const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('ARQWEB_TP', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;