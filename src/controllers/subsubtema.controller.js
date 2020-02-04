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