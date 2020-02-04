const Sequelize = require('sequelize').Sequelize;
import { sequelize } from '../database/database'; // Cadena de conexión
//import Libro from './libro.model';
//import AutorLibro from './autor.libro.model';

const Subarea = sequelize.define('subareas', { // Definición de modelo, por eso en singular
    ID_subarea: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_subarea: {
        type: Sequelize.TEXT,
    },
    AREA_ID_area: {
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'SUBAREA', // Nombre de la tabla, muy importante
});

//Autor.belongsToMany(Libro, {through: AutorLibro, foreignKey: 'AUTOR_ID_autor', otherKey: 'LIBRO_ID_libro'});
//Libro.belongsToMany(Autor, {through: AutorLibro, foreignKey: 'LIBRO_ID_libro', otherKey: 'AUTOR_ID_autor'});

export default Subarea;