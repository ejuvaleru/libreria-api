import {Router} from 'express';

import {getAutores, insertAutor, getAutor, eliminarAutor} from '../controllers/autor.controller'
const router = Router();

router.get('/', getAutores);
router.post('/', insertAutor);
router.get('/:autorId', getAutor);
router.delete('/:autorId', eliminarAutor);

export default router;