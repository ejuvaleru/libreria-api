import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const Libro = sequelize.define('libros', {
    ID_libro: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    num_pagina: {
        type: Sequelize.INTEGER
    },
    num_edicion: {
        type: Sequelize.INTEGER
    },
    isbn: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    codigo_identificador: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    titulo: {
        type: Sequelize.TEXT,

    },
    EDITORIAL_ID_editorial: { type: Sequelize.INTEGER },
    NOMENCLATURA_ID_NOMENCLATURA: { type: Sequelize.INTEGER }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'LIBRO'
}
);

export default Libro;