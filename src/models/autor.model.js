import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión
import Libro from './libro.model';
import AutorLibro from './autor.libro.model';

const Autor = sequelize.define('autores', { // Definición de modelo, por eso en singular
    ID_autor: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_autor: {
        type: Sequelize.TEXT,
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
<<<<<<< HEAD
    tableName: 'autor', // Nombre de la tabla, muy importante
});


Autor.belongsToMany(Libro, {
    through: AutorLibro,
    as: 'libro_autor',
    foreignKey: 'AUTOR_ID_autor',
    otherKey: 'LIBRO_ID_libro'
});

Libro.belongsToMany(Autor, {
    through: AutorLibro,
    as: 'libro_autor',
    foreignKey: 'LIBRO_ID_libro',
    otherKey: 'AUTOR_ID_autor'
});
=======
    tableName: 'AUTOR', // Nombre de la tabla, muy importante
}, 
);
>>>>>>> df0a504d589630743620a1c21ffe246ca27efcc3

export default Autor;