import Area from '../models/area.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
export async function getAreas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los areas
            const areas = await Area.findAll();
            res.json({
                data: areas,
            });
        } else if (query.ID_area) { 
            const areas = await Area.findAll({
                where: {
                    ID_area: query.ID_area,
                },
            });
            return res.json({
                data: areas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}