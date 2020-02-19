import Rol from '../models/rol.model';
const Sequelize = require('sequelize').Sequelize;

// Create Read Update Delete

// Devuelte todos los roles
export async function getRoles(req, res) {
    try {
            const roles = await Rol.findAll({
                // order: [
                //     ['ID_rol', 'DESC'],
                // ],
            });
            return res.json({
                data: roles,
            });
    } catch (e) {
        console.log(e);
    }
}