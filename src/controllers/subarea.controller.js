import Subarea from '../models/subarea.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
export async function getSubareas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // 
            const subareas = await Subarea.findAll();
            res.json({
                data: subareas,
            });
        } else if (query.ID_subarea) { // 
            const subareas = await Subarea.findAll({
                where: {
                    ID_subarea: query.ID_subarea,
                },
            });
            return res.json({
                data: subareas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function getSubareasPorIdArea(req, res) {
    try {
        const query = req.query;
        const subareas = await Subarea.findAll({
            where: {
                AREA_ID_area: query.AREA_ID_area,
            },
        });
        return res.json({
            data: subareas,
        });

    } catch (e) { // En caso de error mandamos un mensaje y para ENV.DEV dejamos los mensajes por consola
        console.log(e);
        res.status(500).send('Error en el servidor');
    }
}