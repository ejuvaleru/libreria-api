const Sequelize = require('sequelize').Sequelize;
import { sequelize } from '../database/database'; // Cadena de conexión
import Libro from './libro.model';
import Area from './area.model';
import Subarea from './subarea.model';
import Tema from './tema.model';
import Subtema from './subtema.model';
import Subsubtema from './subsubtema.model';



const Nomenclatura = sequelize.define('nomenclaturas', { // Definición de modelo, por eso en singular
    ID_NOMENCLATURA: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    abreviacion: {
        type: Sequelize.TEXT,
    },
    AREA_ID_area: {
        type: Sequelize.INTEGER,
    },
    SUBAREA_ID_subarea: {
        type: Sequelize.INTEGER,
    },
    TEMA_ID_tema: {
        type: Sequelize.INTEGER,
    },
    SUBTEMA_ID_subtema: {
        type: Sequelize.INTEGER,
    },
    Subsubtema_ID_subsubtema: {
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'NOMENCLATURA', // Nombre de la tabla, muy importante
});

//Autor.belongsToMany(Libro, {through: AutorLibro, foreignKey: 'AUTOR_ID_autor', otherKey: 'LIBRO_ID_libro'});
//Libro.belongsToMany(Autor, {through: AutorLibro, foreignKey: 'LIBRO_ID_libro', otherKey: 'AUTOR_ID_autor'});

//Ejemplar.belongsTo(Libro, {foreignKey: 'LIBRO_ID_libro', as: 'ejemplar'});
//Libro.hasMany(Ejemplar, {foreignKey: 'LIBRO_ID_libro', as: 'ejemplar'});

//AQUI ESTAN TODAS LAS ASOCIACIONES DE NOMENCLATURA CON LAS DEMAS TABLAS

Nomenclatura.belongsTo(Area, {foreignKey: 'AREA_ID_area', as: 'nomenclatura_area'});
Area.hasMany(Nomenclatura, {foreignKey: 'AREA_ID_area', as: 'nomenclatura_area'});

Area.hasMany(Subarea, {foreignKey: 'AREA_ID_area', as: 'area'});
Subarea.belongsTo(Area, {foreignKey: 'AREA_ID_area', as: 'area'});

Nomenclatura.belongsTo(Subarea, {foreignKey: 'SUBAREA_ID_subarea', as: 'nomenclatura_subarea'});
Subarea.hasMany(Nomenclatura, {foreignKey: 'SUBAREA_ID_subarea', as: 'nomenclatura_subarea'});

Subarea.hasMany(Tema, {foreignKey: 'SUBAREA_ID_subarea', as: 'subarea'});
Tema.belongsTo(Subarea, {foreignKey: 'SUBAREA_ID_subarea', as: 'subarea'});

Nomenclatura.belongsTo(Tema, {foreignKey: 'TEMA_ID_tema', as: 'nomenclatura_tema'});
Tema.hasMany(Nomenclatura, {foreignKey: 'TEMA_ID_tema', as: 'nomenclatura_tema'});

Tema.hasMany(Subtema, {foreignKey: 'TEMA_ID_tema', as: 'tema'});
Subtema.belongsTo(Tema, {foreignKey: 'TEMA_ID_tema', as: 'tema'});

Nomenclatura.belongsTo(Subtema, {foreignKey: 'SUBTEMA_ID_subtema', as: 'nomenclatura_subtema'});
Subtema.hasMany(Nomenclatura, {foreignKey: 'SUBTEMA_ID_subtema', as: 'nomenclatura_subtema'});

Subtema.hasMany(Subsubtema, {foreignKey: 'SUBTEMA_ID_subtema', as: 'subtema'});
Subsubtema.belongsTo(Subtema, {foreignKey: 'SUBTEMA_ID_subtema', as: 'subtema'});

Nomenclatura.belongsTo(Subsubtema, {foreignKey: 'Subsubtema_ID_subsubtema', as: 'nomenclatura_subsubtema'});
Subsubtema.hasMany(Nomenclatura, {foreignKey: 'Subsubtema_ID_subsubtema', as: 'nomenclatura_subsubtema'});

Nomenclatura.hasMany(Libro, {foreignKey:'NOMENCLATURA_ID_NOMENCLATURA', as:'libro'});
Libro.belongsTo(Nomenclatura, {foreignKey: 'NOMENCLATURA_ID_NOMENCLATURA', as: 'libro'});

export default Nomenclatura;