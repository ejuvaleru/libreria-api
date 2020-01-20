import Autor from '../models/autor.model';

// Seleccionar todos los autores
export async function getAutores(req, res) {
    try {
        const autores = await Autor.findAll();
        res.json({
            data: autores,
        });
    } catch (e) {
        console.log(e);
    }
}

// Insertar nuevo autor
export async function insertAutor(req, res) {
    try {
        const { nombre_autor, paterno_autor, materno_autor } = req.body;

        let nuevoAutor = Autor.create({
            nombre_autor, // Cómo tiene el mismo nombre que el modelo, es igual a hacer nombre_autor: nombre_autor
            paterno_autor,
            materno_autor
        });

        if (nuevoAutor) {
            res.json({
                message: 'Creado exitosamente!',
                data: nuevoAutor
            })
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong!'
        });
    }
}