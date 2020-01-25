import Ejemplar from '../models/ejemplar.model';
import Libro from '../models/libro.model';

export async function getEjemplares(req, res) {
    try {
        const ejemplares = await Ejemplar.findAll();
        res.json({
            data: ejemplares,
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getEjemplaresPorLibroId(req, res) {
    try {

        const { idLibro } = req.params;
        console.log(idLibro);
        const ejemplares = await Libro.findAll({
            include: [{
                model: Ejemplar,
                as: 'ejemplar',
                where: {
                    'LIBRO_ID_libro': idLibro
                },
                required: true,
            }]
        });
        res.json({
            data: ejemplares,
        });
    } catch (e) {
        console.log(e);
    }
}
