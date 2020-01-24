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

        let nuevoAutor = await Autor.create({
            nombre_autor, // Cómo tiene el mismo nombre que el modelo, es igual a hacer nombre_autor: nombre_autor
        }, {
            fields: ['nombre_autor']
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

export async function eliminarAutor(req, res){
    try{
        const {autorId} = req.params;
        const deletedCountRow = await Autor.destroy({
            where: {
                ID_autor: autorId
            }
        });
        res.json({
            data: 'Eliminado correctamente!',
            count: deletedCountRow
        });
    } catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong!'
        });
    }
}