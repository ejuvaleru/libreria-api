import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const Menu = sequelize.define('menus    ', {
    ID_menu: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_item: {
        type: Sequelize.TEXT,
    },
    descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    precio: {
        type: Sequelize.DOUBLE
    }
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'MENU'
}
);

export default Menu;