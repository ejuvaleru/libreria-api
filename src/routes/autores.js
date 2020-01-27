import {Router} from 'express';

import {getAutores, insertAutor, getAutor, eliminarAutor, getLibroYSuAutorPorIdAutor, getLibroYSuAutorPorNombreAutor, getMaxAutores} from '../controllers/autor.controller'
const router = Router();

router.get('/', getAutores);
router.post('/', insertAutor);
router.get('/:autorId', getAutor);
router.delete('/:autorId', eliminarAutor);
router.get('/:autorId/libros', getLibroYSuAutorPorIdAutor);
router.get('/max/max', getMaxAutores); //CORREGIR

export default router;