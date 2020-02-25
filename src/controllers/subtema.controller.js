import Subtema from '../models/subtema.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Create Read Update 
export async function insertSubtema(req, res) {
    try {
        const { nombre_subtema, TEMA_ID_tema } = req.body;

        let nuevoSubtema = await Subtema.create({
            nombre_subtema,
            TEMA_ID_tema
        });

        if (nuevoSubtema) {
            return res.json({
                code: 201,
                data: nuevoSubtema,
                message: 'Subtema agregado exitosamente.'
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

export async function updateSubtema(req, res) {
    const { idSubtema } = req.params;
    const { nombre_subtema, TEMA_ID_tema } = req.body;

    let subTemas = await Subtema.findAll({
        attributes: ['ID_subtema', 'nombre_subtema', 'TEMA_ID_tema'],
        where: { ID_subtema: idSubtema }
    });

    if (subTemas.length > 0) {
        subTemas.forEach(a => {
            a.update({
                nombre_subtema,
                TEMA_ID_tema
            });
        });
        return res.json({
            code: 200,
            message: 'Subtema actualizado correctamente.',
            data: subTemas
        });
    }
}

// Seleccionar todos los subtemas
export async function getSubtemas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los subtemas
            const subtemas = await Subtema.findAll();
            res.json({
                data: subtemas,
            });
        } else if (query.ID_subtema) { // 
            const subtemas = await Subtema.findAll({
                where: {
                    ID_subtema: query.ID_subtema,
                },
            });
            return res.json({
                data: subtemas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function getSubtemasPorIdTema(req, res) {
    try {
        const query = req.query;
        const subtemas = await Subtema.findAll({
            where: {
                TEMA_ID_tema: query.TEMA_ID_tema,
            },
        });
        return res.json({
            data: subtemas,
        });

    } catch (e) { // En caso de error mandamos un mensaje y para ENV.DEV dejamos los mensajes por consola
        console.log(e);
        res.status(500).send('Error en el servidor');
    }
}