import Subarea from '../models/subarea.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Ceate Read Update
export async function insertSubArea(req, res) {
    try {
        const { nombre_subarea, AREA_ID_area } = req.body;

        let nuevaSubarea = await Subarea.create({
            nombre_subarea,
            AREA_ID_area
        });

        if (nuevaSubarea) {
            return res.json({
                code: 201,
                data: nuevaSubarea,
                message: 'Sub área agregada exitosamente.'
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

export async function updateSubarea(req, res) {
    const { idSubarea } = req.params;
    const { nombre_subarea, AREA_ID_area } = req.body;

    let subareas = await Subarea.findAll({
        attributes: ['ID_subarea', 'nombre_subarea', 'AREA_ID_area'],
        where: { ID_subarea: idSubarea }
    });

    if (subareas.length > 0) {
        subareas.forEach(a => {
            a.update({
                nombre_subarea,
                AREA_ID_area
            });
        })
        return res.json({
            code: 200,
            message: 'Sub área actualizada correctamente.',
            data: subareas
        });
    }
}

// Seleccionar todas las sub áreas
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