import Subsubtema from '../models/subsubtema.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Create Read Update
export async function insertSubsubtema(req, res) {
    try {
        const { nombre_subsubtema, SUBTEMA_ID_subtema } = req.body;

        let nuevoSubsubtema = await Subsubtema.create({
            nombre_subsubtema,
            SUBTEMA_ID_subtema
        });

        if (nuevoSubsubtema) {
            return res.json({
                code: 201,
                message: 'Subsubtema creado correctamente.',
                data: nuevoSubsubtema
            });
        } else {
            return res.json({
                code: 500,
                message: 'Error interno en el servidor.'
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export async function updateSubsubtema(req, res) {
    const { idSubsubtema } = req.params;
    const { nombre_subsubtema, SUBTEMA_ID_subtema } = req.body;

    let subsubTemas = await Subsubtema.findAll({
        attributes: ['ID_subsubtema', 'nombre_subsubtema', 'SUBTEMA_ID_subtema'],
        where: { ID_subsubtema: idSubsubtema }
    });

    if (subsubTemas.length > 0) {
        subsubTemas.forEach(a => {
            a.update({
                nombre_subsubtema,
                SUBTEMA_ID_subtema
            });
        });
        return res.json({
            code: 200,
            message: 'Subsubtema actualizado correctamente.',
            data: subsubTemas
        });
    }
}

// Seleccionar todos los sub sub temas
export async function getSubsubtemas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los subsubtemas
            const subsubtemas = await Subsubtema.findAll();
            res.json({
                data: subsubtemas,
            });
        } else if (query.ID_subsubtema) { // 
            const subsubtemas = await Subsubtema.findAll({
                where: {
                    ID_subsubtema: query.ID_subsubtema,
                },
            });
            return res.json({
                data: subsubtemas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

//ejemplo http://localhost:4000/api/subsubtemas/byID_subtema?SUBTEMA_ID_subtema=1
export async function getSubsubtemasPorIdSubtema(req, res) {
    try {
        const query = req.query;
        const subsubtemas = await Subsubtema.findAll({
            where: {
                SUBTEMA_ID_subtema: query.SUBTEMA_ID_subtema,
            },
        });
        return res.json({
            data: subsubtemas,
        });

    } catch (e) { // En caso de error mandamos un mensaje y para ENV.DEV dejamos los mensajes por consola
        console.log(e);
        res.status(500).send('Error en el servidor');
    }
}