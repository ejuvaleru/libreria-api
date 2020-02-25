import Area from '../models/area.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

export async function insertArea(req, res) {
    try {
        const { nombre_area } = req.body;

        let nuevaArea = await Area.create({
            nombre_area
        });
        if (nuevaArea) {
            return res.json({
                code: 201,
                data: nuevaArea,
                message: 'Área agregada exitosamente.'
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

export async function updateArea(req, res) {
    const { idArea } = req.params;
    const { nombre_area } = req.body;

    let areas = await Area.findAll({
        attributes: ['ID_area', 'nombre_area'],
        where: { ID_area: idArea }
    });

    if (areas.length > 0) {
        areas.forEach(a => {
            a.update({
                nombre_area
            });
        })
        return res.json({
            message: 'Área actualizada correctamente.',
            data: areas
        });
    }
}

// Seleccionar todos las áreas
export async function getAreas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los areas
            const areas = await Area.findAll();
            if (areas) {
                return res.json({
                    code: 200,
                    data: areas,
                    message: 'Áreas encontradas exitosamente.'
                });
            } else {
                return res.json({
                    code: 400,
                    data: [],
                    message: 'No se encontraron registros.'
                })
            }
        } else if (query.ID_area) {
            const areas = await Area.findAll({
                where: {
                    ID_area: query.ID_area,
                },
            });
            return res.json({
                code: 200,
                data: areas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}