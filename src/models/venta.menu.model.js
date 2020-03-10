import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const VentaMenu = sequelize.define('venta_has_menu', {
    cantidad: {
        type: Sequelize.INTEGER
    },
    VENTA_ID_venta: { type: Sequelize.INTEGER },
    MENU_ID_menu: { type: Sequelize.INTEGER }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'VENTA_MENU'
}
);

export default VentaMenu;