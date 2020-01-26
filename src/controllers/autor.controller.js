import Autor from '../models/autor.model';
import Libro from '../models/libro.model';
import AutorLibro from '../models/autor.libro.model';
const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

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

// Seleccionar un autor
export async function getAutor(req, res) {
    try {
        const { autorId } = req.params;
        const autor = await Autor.findOne({
            where: {
                ID_autor: autorId
            }
        });
        res.json(autor);
    } catch (E) {
        res.status(500).json('Error');
    }
}

// Insertar nuevo autor
export async function insertAutor(req, res) {
    try {
        const { nombre_autor } = req.body;

        const nuevoAutor = await Autor.create({
            nombre_autor, // Cómo tiene el mismo nombre que el modelo, es igual a hacer nombre_autor: nombre_autor
        }, {
            fields: ['nombre_autor']
        });
        // console.log(nuevoAutor.null);
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

export async function eliminarAutor(req, res) {
    try {
        const { autorId } = req.params;
        const deletedCountRow = await Autor.destroy({
            where: {
                ID_autor: autorId
            }
        });
        res.json({
            data: 'Eliminado correctamente!',
            count: deletedCountRow
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong!'
        });
    }
}

export async function getLibroYSuAutorPorIdAutor(req, res) {
    try {
        console.log(req);
        let { autorId } = req.params;
        // console.log('ID AUTOR ', idAutor);
        const libro = await Autor.findAll({
            include: [{
                model: Libro,
                required: true,
                attributes: ['titulo'],
                through: {
                    where: { AUTOR_ID_autor: autorId },
                }
            }]
        });
        res.json({
            data: libro,
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getLibroYSuAutorPorNombreAutor(req, res) {
    try {
        console.log(req);
        let { autorId } = req.params;
        // console.log('ID AUTOR ', idAutor);
        const libro = await Autor.findAll({
            include: [{
                model: Libro,
                required: true,
                attributes: ['titulo'],
                through: {
                    where: { AUTOR_ID_autor: autorId },
                }
            }]
        });
        res.json({
            data: libro,
        });
    } catch (e) {
        console.log(e);
    }
}

// Seleccionar el autor con ID mayor
export async function getMaxAutores(req, res) {
    try {
        const autores = await Autor.findAll({
            attributes: [[Sequelize.fn('max', Sequelize.col('ID_autor')), 'maxIDautor']],
          });
        res.json({
            data: autores,
        });
    } catch (e) {
        console.log(e);
    }
}