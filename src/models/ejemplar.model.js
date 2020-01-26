import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión
import Libro from '../models/libro.model';

const Ejemplar = sequelize.define('ejemplar', {
    ID_ejemplares: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    estado: Sequelize.TEXT,
    descripcion: Sequelize.TEXT,
    costo_venta: Sequelize.INTEGER,
    costo_compra: Sequelize.INTEGER,
    costo_descuento: Sequelize.INTEGER,
    url_fotografia: Sequelize.TEXT,
    fecha_adquisicion: Sequelize.DATE,
    LIBRO_ID_libro: {
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false,
    tableName: 'Ejemplar'
});

Ejemplar.belongsTo(Libro, {foreignKey: 'LIBRO_ID_libro', as: 'ejemplar'});
Libro.hasMany(Ejemplar, {foreignKey: 'LIBRO_ID_libro', as: 'ejemplar'});

export default Ejemplar;