import AutorLibro from '../models/autor.libro.model';

export async function insertarAutorLibro(req, res) {
    try {
        const {AUTOR_ID_autor, LIBRO_ID_libro } = req.body;
        let nuevoAutorLibro = await AutorLibro.create({
            AUTOR_ID_autor,
            LIBRO_ID_libro
        });
        console.log(nuevoAutorLibro);
        if (nuevoAutorLibro) {
            return res.json({
                message: "autorLibro creado exitosamente!",
                data: nuevoAutorLibro
            });
        }
    } catch (e) {
        console.log(e);
    }
}