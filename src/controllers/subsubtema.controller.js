import Subsubtema from '../models/subsubtema.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
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