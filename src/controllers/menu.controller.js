import Menu from '../models/menu.model';
const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
export async function getMenus(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los libros
            const menus = await Menu.findAll();
            res.json({
                data: menus,
            });
        } else if (query.nombre_item) { // Si en la query hay un isbn entonces entra aquí y devuelve coincidencias por ISBN
            const menus = await Menu.findAll({
                where: {
                    nombre_item: query.nombre_item,
                },
            });
            return res.json({
                data: menus,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function insertMenu(req, res) {
    try {
        const { nombre_item, descripcion, precio } = req.body;

        const nuevoMenu = await Menu.create({
            nombre_item, 
            descripcion,
            precio
        }, {
            fields: ['nombre_item','descripcion','precio']
        });
        // console.log(nuevoAutor.null);
        if (nuevoMenu) {
            return res.json({
                message: 'Creado exitosamente!',
                data: nuevoMenu
            })
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong!'
        });
    }
}

export async function getMenuById(req, res) {
    try {
        const { idMenu } = req.params; // Extraemos de los parametros la URL

        let menu = await Menu.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
            where: {
                ID_menu: idMenu // Buscamos por ID del ejemplar
            },
        });
        if (!menu) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                code: 404,
                message: `Ninguna editorial encontrada con el ID ${idMenu}`,
                data: null
            });
        } else {
            return res.json({
                code: 200,
                message: 'Editorial encontrada.',
                data: menu
            }); // Si encuentra algo refresa el objeto
        }

    } catch (e) {
        console.log(e);
    }
}

//// Seleccionar el editorial con ID mayor
//export async function getMaxEditoriales(req, res) {
//    try {
//        const editoriales = await Editorial.findAll({
//            attributes: [[Sequelize.fn('max', Sequelize.col('ID_editorial')), 'maxIDeditorial']],
//        });
//        res.json({
//            data: editoriales,
//        });
//    } catch (e) {
//        console.log(e);
//    }
//}


