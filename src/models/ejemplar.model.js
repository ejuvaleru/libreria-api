import Sequelize from 'sequelize';
import { sequelize } from '../database/database'; // Cadena de conexión

const Ejemplar = sequelize.define('ejemplar', {
    ID_ejemplares: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    
});