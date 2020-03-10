import {Router} from 'express';

import {insertarAutorLibro, getAutorLibro, getAutorLibroByLibroId, getAutorLibroByAutorId} from '../controllers/autor.libro.controller'
const router = Router();

router.post('/', insertarAutorLibro);
router.get('/', getAutorLibro);

router.get('/libro/:idLibro', getAutorLibroByLibroId);
router.get('/autor/:idAutor', getAutorLibroByAutorId);

export default router;