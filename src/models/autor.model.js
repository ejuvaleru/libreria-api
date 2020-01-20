import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const Autor = sequelize.define('autor', { // Definición de modelo, por eso en singular
    nombre_autor: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
    },
    paterno_autor: {
        type: Sequelize.TEXT
    },
    materno_autor: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'autor', // Nombre de la tabla, muy importante
}, 
);

export default Autor;