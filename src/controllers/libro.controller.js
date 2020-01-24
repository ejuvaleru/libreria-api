import Libro from '../models/libro.model';
import { sequelize } from '../database/database'; // Cadena de conexión

export async function getLibros(req, res) {
    try {
        const libros = await Libro.findAll();
        res.json({
            data: libros,
        });
    } catch (e) {
        console.log(e);
    }
}

// export async function getLibroPorIdAutor(req, res) {
//     try {
//         const { idAutor } = req.params;
//         const libro = await Libro.findOne({
//             where: {
//                 ID_autor: idAutor
//             }
//         });
//         console.log(nombre);
//         res.json({
//             data: libro,
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }