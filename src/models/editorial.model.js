import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión
import Libro from './libro.model';

const Editorial = sequelize.define('editorial', {
    ID_editorial: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nombre_editorial:{
        type: Sequelize.TEXT,
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'EDITORIAL', // Nombre de la tabla, muy importante
});

//Editorial.hasMany(Libro);
//Libro.belongsTo(Editorial)

export default Editorial;