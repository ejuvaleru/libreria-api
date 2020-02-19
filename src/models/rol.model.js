import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const Rol = sequelize.define('roles', {
    ID_rol: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: Sequelize.TEXT,
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'ROL'
});

export default Rol;