import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const AutorLibro = sequelize.define('autor_has_libro', {
    LIBRO_ID_libro: {
        type: Sequelize.INTEGER,
        references: {
            model: 'libros',
            key: 'ID_libro'
        }
    },
    AUTOR_ID_autor: {
        type: Sequelize.INTEGER,
        references: {
            model: 'autores',
            key: 'ID_autor'
        }
    }
},
    {
        timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
        tableName: 'LIBRO_AUTOR', // Nombre de la tabla, muy importante
    });

export default AutorLibro;