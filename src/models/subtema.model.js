const Sequelize = require('sequelize').Sequelize;
import { sequelize } from '../database/database'; // Cadena de conexión
//import Libro from './libro.model';
//import AutorLibro from './autor.libro.model';

const Subtema = sequelize.define('subtemas', { // Definición de modelo, por eso en singular
    ID_subtema: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_subtema: {
        type: Sequelize.TEXT,
    },
    TEMA_ID_tema: {
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'SUBTEMA', // Nombre de la tabla, muy importante
});

//Autor.belongsToMany(Libro, {through: AutorLibro, foreignKey: 'AUTOR_ID_autor', otherKey: 'LIBRO_ID_libro'});
//Libro.belongsToMany(Autor, {through: AutorLibro, foreignKey: 'LIBRO_ID_libro', otherKey: 'AUTOR_ID_autor'});

export default Subtema;