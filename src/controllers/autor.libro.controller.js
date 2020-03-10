import AutorLibro from '../models/autor.libro.model';

export async function insertarAutorLibro(req, res) {
    try {
        const { AUTOR_ID_autor, LIBRO_ID_libro } = req.body;
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

// Obtener todos los registros de libroAutor
export async function getAutorLibro(req, res) {
    try {
        const autoresLibros = await AutorLibro.findAll();
        if (autoresLibros) {
            return res.json({
                code: 200,
                message: 'Autores Libros encontrados.',
                data: autoresLibros,
            });
        } else {
            return res.json({
                code: 404,
                message: 'Ningún autorLibro encontrado',
                data: null
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function getAutorLibroByLibroId(req, res) {
    try {
        const { idLibro } = req.params;

        const autoresLibros = await AutorLibro.findOne({
            where: { LIBRO_ID_libro: idLibro }
        });
        if (autoresLibros) {
            return res.json({
                code: 200,
                message: `Autores Libros encontrados con el libro ${idLibro}.`,
                data: autoresLibros,
            });
        } else {
            return res.json({
                code: 404,
                message: `Nngún  autor libro encontrado con el libro ${idLibro}.`,
                data: null
            });
        }
    } catch (e) {
        console.log(e);
    }
}
export async function getAutorLibroByAutorId(req, res) {
    try {
        const { idAutor } = req.params;

        const autoresLibros = await AutorLibro.findOne({
            where: { AUTOR_ID_autor: idAutor }
        });
        if (autoresLibros) {
            return res.json({
                code: 200,
                message: `Autores Libros encontrados con el autor ${idAutor}.`,
                data: autoresLibros,
            });
        } else {
            return res.json({
                code: 404,
                message: `Ningún autor Libro encontrado con el autor ${idAutor}.`,
                data: null
            });
        }
    } catch (e) {
        console.log(e);
    }
}