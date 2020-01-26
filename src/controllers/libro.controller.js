import Libro from '../models/libro.model';
// import Autor from '../models/autor.model';
// import AutorLibro from '../models/autor.libro.model';

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

export async function getLibroPorIsbn(req, res) {
    try {
        let { isbn } = req.params;
        const libros = await Libro.findOne({
            where: {
                isbn
            }
        });
        res.json({
            data: libros,
        });
    } catch (e) {
        console.log(e);
    }
}