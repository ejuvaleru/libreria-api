import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión
import Usuario from '../models/usuario.model';

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
Venta.belongsTo(Usuario, {foreignKey: 'USUARIO_ID_usuario', as: 'venta'});
Usuario.hasMany(Venta, {foreignKey: 'USUARIO_ID_usuario', as: 'venta'});

export default Venta;