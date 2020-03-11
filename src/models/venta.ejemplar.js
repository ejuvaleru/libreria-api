import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión
import Ejemplar from '../models/ejemplar.model';
import Venta from '../models/venta.model';

const VentaEjemplar = sequelize.define('venta_has_ejemplar', {
    VENTA_ID_venta: { type: Sequelize.INTEGER },
    EJEMPLAR_ID_ejemplares: { type: Sequelize.INTEGER }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'VENTA_EJEMPLAR'
}
);

Ejemplar.belongsToMany(Venta, {through: VentaEjemplar, foreignKey: 'EJEMPLAR_ID_ejemplares', otherKey: 'VENTA_ID_venta'});
Venta.belongsToMany(Ejemplar, {through: VentaEjemplar, foreignKey: 'VENTA_ID_venta', otherKey: 'EJEMPLAR_ID_ejemplares'});


export default VentaEjemplar;