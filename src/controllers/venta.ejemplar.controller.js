import VentaEjemplar from '../models/venta.ejemplar.model';
const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
export async function getVentaEjemplar(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los libros
            const ventasEjemplares = await VentaEjemplar.findAll();
            res.json({
                data: ventasEjemplares,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function insertVentaEjemplar(req, res) {
    try {
        const { VENTA_ID_venta, EJEMPLAR_ID_ejemplares } = req.body;

        const nuevoVentaEjemplar = await VentaEjemplar.create({
            VENTA_ID_venta, 
            EJEMPLAR_ID_ejemplares
        }, {
            fields: ['VENTA_ID_venta','EJEMPLAR_ID_ejemplares']
        });
        // console.log(nuevoAutor.null);
        if (nuevoVentaEjemplar) {
            return res.json({
                message: 'Creado exitosamente!',
                data: nuevoVentaEjemplar
            })
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong!'
        });
    }
}

//export async function getMenuById(req, res) {
//    try {
//        const { idMenu } = req.params; // Extraemos de los parametros la URL
//
//        let menu = await Menu.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
//            where: {
//                ID_menu: idMenu // Buscamos por ID del ejemplar
//            },
//        });
//        if (!menu) { // Si no encuentra nada regresa un mensaje de error
//            return res.json({
//                code: 404,
//                message: `Ninguna editorial encontrada con el ID ${idMenu}`,
//                data: null
//            });
//        } else {
//            return res.json({
//                code: 200,
//                message: 'Editorial encontrada.',
//                data: menu
//            }); // Si encuentra algo refresa el objeto
//        }
//
//    } catch (e) {
//        console.log(e);
//    }
//}

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

