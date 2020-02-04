const Sequelize = require('sequelize').Sequelize;
import { sequelize } from '../database/database'; // Cadena de conexión
//import Libro from './libro.model';
//import AutorLibro from './autor.libro.model';

const Area = sequelize.define('areas', { // Definición de modelo, por eso en singular
    ID_area: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_area: {
        type: Sequelize.TEXT,
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'AREA', // Nombre de la tabla, muy importante
});

//Autor.belongsToMany(Libro, {through: AutorLibro, foreignKey: 'AUTOR_ID_autor', otherKey: 'LIBRO_ID_libro'});
//Libro.belongsToMany(Autor, {through: AutorLibro, foreignKey: 'LIBRO_ID_libro', otherKey: 'AUTOR_ID_autor'});

export default Area;