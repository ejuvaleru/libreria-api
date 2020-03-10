import Ejemplar from '../models/ejemplar.model';
import Libro from '../models/libro.model';

// Crear un ejemplar, necesita el id de un libro existente
// Create Read Update Delete
export async function insertarEjemplar(req, res) {
    try {
        const { estado, descripcion, costo_venta, costo_compra, costo_descuento, url_fotografia, fecha_adquisicion, LIBRO_ID_libro } = req.body;
        let nuevoEjemplar = await Ejemplar.create({
            estado,
            descripcion,
            costo_venta,
            costo_compra,
            costo_descuento,
            url_fotografia,
            fecha_adquisicion,
            LIBRO_ID_libro
        }, {
            fields: ['estado', 'descripcion', 'costo_venta', 'costo_compra', 'costo_descuento', 'url_fotografia', 'fecha_adquisicion', 'LIBRO_ID_libro']
        });
        console.log(nuevoEjemplar);
        if (nuevoEjemplar) {
            return res.json({
                message: "Ejemplar creado exitosamente!",
                data: nuevoEjemplar
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function getEjemplarPorId(req, res) {
    try {
        const { idEjemplar } = req.params; // Extraemos de los parametros la URL

        let ejemplar = await Ejemplar.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
            where: {
                ID_ejemplares: idEjemplar // Buscamos por ID del ejemplar
            },
        });
        if (!ejemplar) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                message: 'Ningún ejemplar encontrado con ese ID',
                data: []
            });
        }
        res.json(ejemplar); // Si encuentra algo refresa el objeto

    } catch (e) { // En caso de error mandamos un mensaje y para ENV.DEV dejamos los mensajes por consola
        console.log(e);
        res.status(500).send('Error en el servidor');
    }
}

export async function updateEjemplarPorId(req, res) {
    try {
        const { idEjemplar } = req.params;
        const { estado, descripcion, costo_venta, costo_compra, costo_descuento, url_fotografia, fecha_adquisicion, LIBRO_ID_libro } = req.body;

        let ejemplares = await Ejemplar.findAll({
            attributes: ['ID_ejemplares','estado', 'descripcion', 'costo_venta', 'costo_compra', 'costo_descuento', 'url_fotografia', 'fecha_adquisicion', 'LIBRO_ID_libro'],
            where: { ID_ejemplares: idEjemplar }
        });

        if (ejemplares.length > 0) {
            ejemplares.forEach(async e => {
                await e.update({
                    estado,
                    descripcion,
                    costo_venta,
                    costo_compra,
                    costo_descuento,
                    url_fotografia,
                    fecha_adquisicion,
                    LIBRO_ID_libro
                });
            });
        }

        return res.json({
            message: 'Ejemplar actualizado correctamente',
            data: ejemplares
        });
    } catch (e) {

    }
}

export async function deleteEjemplarPorId(req, res) {
    try {
        const { idEjemplar } = req.params;
        let ejemplarCount = await Ejemplar.destroy({
            where: {
                ID_ejemplares: idEjemplar
            }
        });
        res.json({
            message: 'Ejemplar eliminado correctamente',
            data: ejemplarCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Error en el servidor');
    }
}

// Recupera todos los ejemplares
export async function getEjemplares(req, res) {
    try {
        let ejemplares = await Ejemplar.findAll();
        res.json({
            data: ejemplares,
        });
    } catch (e) {
        console.log(e);
    }
}

// Recupera los ejemplares que pertenecen a un libro
export async function getEjemplaresPorLibroId(req, res) {
    try {

        const { idLibro } = req.params;
        console.log(idLibro);
        let ejemplares = await Libro.findAll({
            include: [{
                model: Ejemplar,
                as: 'ejemplar',
                where: {
                    'LIBRO_ID_libro': idLibro
                },
                required: true,
            }]
        });
        console.log(ejemplares);
        if (await ejemplares.length !== 0) {
            console.log('ENTRÓ AL IG A BUSCAR EJEMPLARES');
            res.json({
                data: ejemplares,
            });
        } else {
            let libro = await Libro.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
                where: {
                    ID_libro: idLibro // Buscamos por ID del ejemplar
                },
            });
            res.json({
                data: libro
            });
        }

    } catch (e) {
        console.log(e);
    }
}

