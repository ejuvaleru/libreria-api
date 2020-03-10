import Editorial from '../models/editorial.model';

const Sequelize = require('sequelize').Sequelize; //para poder utilizar funcion MAX de sequelize

// Seleccionar todos las editoriales
export async function getEditoriales(req, res) {
    try {
        const query = req.query;
        console.log(query);
        if (Object.keys(query).length === 0) { // Si no lleva una query entra y devuelve todos los libros
            const editoriales = await Editorial.findAll();
            res.json({
                data: editoriales,
            });
        } else if (query.nombre_editorial) { // Si en la query hay un isbn entonces entra aquí y devuelve coincidencias por ISBN
            const editoriales = await Editorial.findAll({
                where: {
                    nombre_editorial: query.nombre_editorial,
                },
            });
            return res.json({
                data: editoriales,
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export async function insertEditorial(req, res) {
    try {
        const { nombre_editorial } = req.body;

        const nuevoEditorial = await Editorial.create({
            nombre_editorial, // Cómo tiene el mismo nombre que el modelo, es igual a hacer nombre_autor: nombre_autor
        }, {
            fields: ['nombre_editorial']
        });
        // console.log(nuevoAutor.null);
        if (nuevoEditorial) {
            return res.json({
                message: 'Creado exitosamente!',
                data: nuevoEditorial
            })
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong!'
        });
    }
}

export async function getEditorialById(req, res) {
    try {
        const { idEditorial } = req.params; // Extraemos de los parametros la URL

        let editorial = await Editorial.findOne({ // Creamos el objeto ejemplar a partir de lo que encuentre
            where: {
                ID_editorial: idEditorial // Buscamos por ID del ejemplar
            },
        });
        if (!editorial) { // Si no encuentra nada regresa un mensaje de error
            return res.json({
                code: 404,
                message: `Ninguna editorial encontrada con el ID ${idEditorial}`,
                data: null
            });
        } else {
            return res.json({
                code: 200,
                message: 'Editorial encontrada.',
                data: editorial
            }); // Si encuentra algo refresa el objeto
        }

    } catch (e) {
        console.log(e);
    }
}

// Seleccionar el editorial con ID mayor
export async function getMaxEditoriales(req, res) {
    try {
        const editoriales = await Editorial.findAll({
            attributes: [[Sequelize.fn('max', Sequelize.col('ID_editorial')), 'maxIDeditorial']],
        });
        res.json({
            data: editoriales,
        });
    } catch (e) {
        console.log(e);
    }
}



