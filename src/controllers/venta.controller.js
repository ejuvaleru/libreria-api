import Venta from '../models/venta.model';
const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
export async function getVentas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los libros
            const ventas = await Venta.findAll();
            res.json({
                data: ventas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function insertVenta(req, res) {
    try {
        const { fecha_hora, USUARIO_ID_usuario } = req.body;

        const nuevoVenta = await Venta.create({
            fecha_hora,
            USUARIO_ID_usuario
        }, {
            fields: ['fecha_hora','USUARIO_ID_usuario']
        });
        // console.log(nuevoAutor.null);
        if (nuevoVenta) {
            return res.json({
                message: 'Creado exitosamente!',
                data: nuevoVenta
            })
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong!'
        });
    }
}

export async function getVentaById(req, res) {
    try {
        const { idVenta } = req.params; // Extraemos de los parametros la URL

        let ventas = await Venta.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
            where: {
                ID_venta: idVenta // Buscamos por ID del ejemplar
            },
        });
        if (!ventas) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                code: 404,
                message: `Ninguna editorial encontrada con el ID ${idVenta}`,
                data: null
            });
        } else {
            return res.json({
                code: 200,
                message: 'Venta encontrada.',
                data: ventas
            }); // Si encuentra algo refresa el objeto
        }

    } catch (e) {
        console.log(e);
    }
}

// Seleccionar el editorial con ID mayor
export async function getMaxVentas(req, res) {
    try {
        const ventas = await Venta.findAll({
            attributes: [[Sequelize.fn('max', Sequelize.col('ID_venta')), 'maxIDventa']],
        });
        res.json({
            data: ventas,
        });
    } catch (e) {
        console.log(e);
    }
}


