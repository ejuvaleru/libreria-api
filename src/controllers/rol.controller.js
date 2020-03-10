import Rol from '../models/rol.model';
const Sequelize = require('sequelize').Sequelize;

// Create Read Update Delete
export async function getRolById(req, res) {
    try {
        const { idRol } = req.params; // Extraemos de los parametros la URL

        let rol = await Rol.findOne({ // Creamos el objeto rol a partir de lo que encuentre
            where: {
                ID_rol: idRol // Buscamos por ID del rol
            },
        });
        if (!rol) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                code: 404,
                message: `Ningun rol encontrado con el ID ${idRol}`,
                data: null
            });
        } else {
            return res.json({
                code: 200,
                message: 'Rol encontrado.',
                data: rol
            }); // Si encuentra algo refresa el objeto
        }

    } catch (e) {
        console.log(e);
    }
}


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