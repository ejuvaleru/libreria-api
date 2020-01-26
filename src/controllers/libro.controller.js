import Libro from '../models/libro.model';
// import Autor from '../models/autor.model';
// import AutorLibro from '../models/autor.libro.model';

// Create Read Update Delete
export async function insertLibro(req, res) {
    try {

        const { num_pagina, num_edicion, isbn, codigo_identificador, titulo, EDITORIAL_ID_editorial, NOMENCLATURA_ID_NOMENCLATURA } = req.body;

        let nuevoLibro = await Libro.create({
            num_pagina,
            num_edicion,
            isbn,
            codigo_identificador,
            titulo,
            EDITORIAL_ID_editorial,
            NOMENCLATURA_ID_NOMENCLATURA
        });
        if (nuevoLibro) {
            return res.json({
                message: 'Libro agregado exitosamente',
                data: nuevoLibro
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function getLibroPorId(req, res) {
    try {
        const { idLibro } = req.params; // Extraemos de los parametros la URL

        let libro = await Libro.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
            where: {
                ID_libro: idLibro // Buscamos por ID del ejemplar
            },
        });
        if (!libro) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                message: `Ningún libro encontrado con el ID ${idLibro}`,
                data: []
            });
        }
        res.json(libro); // Si encuentra algo refresa el objeto

    } catch (e) { // En caso de error mandamos un mensaje y para ENV.DEV dejamos los mensajes por consola
        console.log(e);
        res.status(500).send('Error en el servidor');
    }
}

export async function updateLibroPorId(req, res) {
    try {
        const { idLibro } = req.params;
        const { num_pagina, num_edicion, isbn, codigo_identificador, titulo, EDITORIAL_ID_editorial, NOMENCLATURA_ID_NOMENCLATURA } = req.body;

        let libros = await Libro.findAll({
            attributes: ['ID_libro', 'num_pagina', 'num_edicion', 'isbn', 'codigo_identificador', 'titulo', 'EDITORIAL_ID_editorial', 'NOMENCLATURA_ID_NOMENCLATURA'],
            where: { ID_libro: idLibro }
        });

        if (libros.length > 0) {
            libros.forEach(async l => {
                await l.update({
                    num_pagina,
                    num_edicion,
                    isbn,
                    codigo_identificador,
                    titulo,
                    EDITORIAL_ID_editorial,
                    NOMENCLATURA_ID_NOMENCLATURA
                });
            });
        }
        return res.json({
            message: 'Libro actualizado correctamente',
            data: libros
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Erroe en el servidor');
    }
}

export async function deleteLibroPorId(req, res) {
    try {
        const { idLibro } = req.params;
        let countLibros = await Libro.destroy({
            where: { ID_libro: idLibro }
        });
        res.json({
            message: 'Libro eliminado correctamente',
            data: countLibros
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Error en el servidor.');
    }
}

// Devuelte todos los libros
export async function getLibros(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los libros
            const libros = await Libro.findAll();
            return res.json({
                data: libros,
            });
        } else if (query.isbn) { // Si en la query hay un isbn entonces entra aquí y devuelve coincidencias por ISBN
            const libros = await Libro.findAll({
                where: {
                    isbn: query.isbn,
                },
            });
            return res.json({
                data: libros,
            });
        } else if (query.titulo) { // Si en la query hay un titulo entonces entra aquí y devuelve coincidencias
            const libros = await Libro.findAll({
                where: {
                    titulo: query.titulo,
                },
            });

            return res.json({
                data: libros,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

// export async function getLibroPorIsbn(req, res) {
//     try {
//         let { isbn } = req.params;
//         console.log('QUERY', req.query);
//         const libros = await Libro.findOne({
//             where: {
//                 isbn
//             }
//         });
//         res.json({
//             data: libros,
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }