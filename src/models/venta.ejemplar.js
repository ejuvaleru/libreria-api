import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const VentaEjemplar = sequelize.define('venta_has_ejemplar', {
    VENTA_ID_venta: { type: Sequelize.INTEGER },
    EJEMPLAR_ID_ejemplares: { type: Sequelize.INTEGER }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'VENTA_EJEMPLAR'
}
);

export default VentaEjemplar;