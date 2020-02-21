import Usuario from '../models/usuario.model';
const Sequelize = require('sequelize').Sequelize;
const bcrypt = require('bcrypt');

// Create Read Update Delete

// Iniciar sesión con un user y password
export async function iniciarSesion(req, res) {
    try {
        const { usuario, contraseña } = req.body; // Extraemos de los parametros la URL
        console.log(req.query);

        let user = await Usuario.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
            where: {
                nombre_usuario: usuario, // Buscamos por USUARIO Y POR PASSWORD
            },
        });
        if (!user) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                message: `Ningún USUARIO encontrado con el usuario ${usuario}`,
                data: null
            });
        } else {
            bcrypt.compare(contraseña, user.contraseña_claro, (err, same) => {
                console.log('Es la misma password? ', same);
                if (same) {
                    req.session.loggedin = true,
                    req.session.user = user.nombre_usuario
                    console.log(req.session);
                    return res.json({
                        isLoggedIn: req.session.loggedin,
                        userLoggedIn: req.session.user,
                        message: 'Inicio de sesión exitoso.',
                        data: user
                    }); // Si encuentra algo refresa el objeto
                } else {
                    return res.json({
                        message: 'Las contraseñas no coinciden.',
                    }); // 
                }

            });
        }
    } catch (e) {
        console.log(e);
    }
}

// Crear un usuario 
export async function createUser(req, res) {
    try {
        const { ID_usuario, nombre, nombre_usuario, contraseña_claro, ROL_id } = req.body;
        console.log('pass: ', contraseña_claro);
        bcrypt.hash(contraseña_claro, 10, async (err, encrypted) => {
            console.log('HASH ', encrypted);
            if (err) {
                return res.json({
                    message: 'Algo salió mal, lo siento.'
                });
            } else {
                let nuevoUsuario = await Usuario.create({
                    ID_usuario,
                    nombre,
                    nombre_usuario,
                    contraseña_claro: encrypted,
                    ROL_id
                });

                if (nuevoUsuario) {
                    return res.json({
                        message: 'Usuario creado correctamente.',
                        data: nuevoUsuario
                    });
                }
            }
        });
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