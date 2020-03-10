import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const Usuario = sequelize.define('usuarios', {
    ID_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: Sequelize.TEXT,
    nombre_usuario: Sequelize.TEXT,
    contraseña_claro: Sequelize.TEXT,
    ROL_ID_rol: Sequelize.INTEGER
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'USUARIO'
});

export default Usuario;