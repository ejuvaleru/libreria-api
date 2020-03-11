import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión
import Menu from '../models/menu.model';
import Venta from '../models/venta.model';

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

Menu.belongsToMany(Venta, {through: VentaMenu, foreignKey: 'MENU_ID_menu', otherKey: 'VENTA_ID_venta'});
Venta.belongsToMany(Menu, {through: VentaMenu, foreignKey: 'VENTA_ID_venta', otherKey: 'MENU_ID_menu'});

export default VentaMenu;