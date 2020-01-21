import {Router} from 'express';

import {getAutores, insertAutor, getAutor} from '../controllers/autor.controller'
const router = Router();

router.get('/', getAutores);
router.post('/', insertAutor);
router.get('/:autorId', getAutor);

export default router;