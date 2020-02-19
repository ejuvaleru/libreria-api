import Usuario from '../models/usuario.model';
const Sequelize = require('sequelize').Sequelize;

// Create Read Update Delete

// Obtener un usuario por user y password
export async function getUsuario(req, res) {
    try {
        const { usuario, contraseña } = req.query; // Extraemos de los parametros la URL
        console.log(req.query);

        let user = await Usuario.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
            where: {
                nombre_usuario: usuario, // Buscamos por USUARIO Y POR PASSWORD
                contraseña_claro: contraseña
            },
        });
        if (!user) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                message: `Ningún USUARIO encontrado con el usuario ${usuario}`,
                data: null
            });
        }
        res.json({
            message: 'Loggin succesfully',
            data: user
        }); // Si encuentra algo refresa el objeto
    } catch (e) {
        console.log(e);
    }
}

// Devuelte todos los usuarios
export async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll({
            // order: [
            //     ['ID_usuario', 'DESC'],
            // ],
        });
        return res.json({
            data: usuarios,
        });
    } catch (e) {
        console.log(e);
    }
}