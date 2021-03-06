import Nomenclatura from '../models/nomenclatura.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Create Read Update
export async function insertNomenclatura(req, res) {
    try {
        const { abreviacion, AREA_ID_area, SUBAREA_ID_subarea, TEMA_ID_tema, SUBTEMA_ID_subtema, Subsubtema_ID_subsubtema } = req.body;

        let nuevaNomenclatura = await Nomenclatura.create({
            abreviacion,
            AREA_ID_area,
            SUBAREA_ID_subarea,
            TEMA_ID_tema,
            SUBTEMA_ID_subtema,
            Subsubtema_ID_subsubtema
        });

        if (nuevaNomenclatura) {
            return res.json({
                code: 201,
                message: 'Nomenclatura creada correctamente.',
                data: nuevaNomenclatura
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

export async function updateNomenclatura(req, res) {
    const { idNomenclatura } = req.params;
    const { abreviacion, AREA_ID_area, SUBAREA_ID_subarea, TEMA_ID_tema, SUBTEMA_ID_subtema, Subsubtema_ID_subsubtema } = req.body;

    let nomenclaturas = await Nomenclatura.findAll({
        attributes: ['ID_NOMENCLATURA', 'abreviacion', 'AREA_ID_area', 'SUBAREA_ID_subarea', 'TEMA_ID_tema', 'SUBTEMA_ID_subtema', 'Subsubtema_ID_subsubtema'],
        where: { ID_NOMENCLATURA: idNomenclatura }
    });

    if (nomenclaturas.length > 0) {
        nomenclaturas.forEach(a => {
            a.update({
                abreviacion,
                AREA_ID_area,
                SUBAREA_ID_subarea,
                TEMA_ID_tema,
                SUBTEMA_ID_subtema,
                Subsubtema_ID_subsubtema
            });
        });
        return res.json({
            code: 200,
            message: 'Nomenclatura actualizada correctamente.',
            data: nomenclaturas
        });
    }
}

// Seleccionar todos las nomenclaturas
export async function getNomenclaturas(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los nomenclaturas
            const nomenclaturas = await Nomenclatura.findAll();
            res.json({
                data: nomenclaturas,
            });
        } else if (query.ID_nomenclatura) { // 
            const nomenclaturas = await Nomenclatura.findAll({
                where: {
                    ID_NOMENCLATURA: query.ID_nomenclatura,
                },
            });
            return res.json({
                data: nomenclaturas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

//ejemplo: http://localhost:4000/api/nomenclaturas/datos?AREA_ID_area=2&SUBAREA_ID_subarea=2&TEMA_ID_tema=2&SUBTEMA_ID_subtema=2&SUBSUBTEMA_ID_subsubtema=2
export async function getNomenclaturasPorIDsDatos(req, res) {
    try {
        const query = req.query;
        console.log(query);
        console.log(Object.keys(query).length);
        if (Object.keys(query).length !== 5) { // 
            //const nomenclaturas = await Nomenclatura.findAll();
            res.json({
                data: { error: 'numero de parametros incorrectos' },
            });
        } else { // 
            const nomenclaturas = await Nomenclatura.findAll({
                where: {
                    AREA_ID_area: query.AREA_ID_area,
                    SUBAREA_ID_subarea: query.SUBAREA_ID_subarea,
                    TEMA_ID_tema: query.TEMA_ID_tema,
                    SUBTEMA_ID_subtema: query.SUBTEMA_ID_subtema,
                    Subsubtema_ID_subsubtema: query.SUBSUBTEMA_ID_subsubtema
                },
            });
            return res.json({
                data: nomenclaturas,
            });
        }
    } catch (e) {
        console.log(e);
    }
}