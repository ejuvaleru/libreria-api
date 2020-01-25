import {Router} from 'express';

import {getAutores, insertAutor, getAutor, eliminarAutor, getLibroYSuAutorPorIdAutor, getLibroYSuAutorPorNombreAutor} from '../controllers/autor.controller'
const router = Router();

router.get('/', getAutores);
router.post('/', insertAutor);
router.get('/:autorId', getAutor);
router.delete('/:autorId', eliminarAutor);
router.get('/:autorId/libros', getLibroYSuAutorPorIdAutor);

export default router;