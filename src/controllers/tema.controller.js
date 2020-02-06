import Tema from '../models/tema.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
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