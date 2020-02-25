import Tema from '../models/tema.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Create Read Update 
export async function insertTema(req, res) {
    try {
        const { nombre_tema, SUBAREA_ID_subarea } = req.body;

        let nuevoTema = await Tema.create({
            nombre_tema,
            SUBAREA_ID_subarea
        });

        if (nuevoTema) {
            return res.json({
                code: 201,
                data: nuevoTema,
                message: 'Tema agregado exitosamente.'
            });
        } else {
            return res.json({
                code: 500,
                message: 'Error interno en el servidor.'
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function updateTema(req, res) {
    const { idTema } = req.params;
    const { nombre_tema, SUBAREA_ID_subarea } = req.body;

    let temas = await Tema.findAll({
        attributes: ['ID_tema', 'nombre_tema', 'SUBAREA_ID_subarea'],
        where: { ID_tema: idTema }
    });

    if (temas.length > 0) {
        temas.forEach(a => {
            a.update({
                nombre_tema,
                SUBAREA_ID_subarea
            });
        });
        return res.json({
            code: 200,
            message: 'Tema actualizado correctamente.',
            data: temas
        });
    }
}

// Seleccionar todos los temas
export async function getTemas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los temas
            const temas = await Tema.findAll();
            res.json({
                data: temas,
            });
        } else if (query.ID_tema) { //
            const temas = await Tema.findAll({
                where: {
                    ID_tema: query.ID_tema,
                },
            });
            return res.json({
                data: temas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function getTemasPorIdSubarea(req, res) {
    try {
        const query = req.query;
        const temas = await Tema.findAll({
            where: {
                SUBAREA_ID_subarea: query.SUBAREA_ID_subarea,
            },
        });
        return res.json({
            data: temas,
        });

    } catch (e) { // En caso de error mandamos un mensaje y para ENV.DEV dejamos los mensajes por consola
        console.log(e);
        res.status(500).send('Error en el servidor');
    }
}