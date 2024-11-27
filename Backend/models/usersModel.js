import { sequelize } from '../config/connection.js'
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false,
            //1 para usuarios normales, 2 para admins
            defaultValue: 1
        }
    }, {
        tableName: 'users',
        timestamps: true
    }
)

export default User;