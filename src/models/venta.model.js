import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const Venta = sequelize.define('ventas', {
    ID_venta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_hora: {
        type: Sequelize.DATE
    },
    USUARIO_ID_usuario: { type: Sequelize.INTEGER },
}, {
    timestamps: false, // Para cuestiones de fecha y evitar errorer, es configuración de Sequelize
    tableName: 'VENTA'
}
);

export default Venta;