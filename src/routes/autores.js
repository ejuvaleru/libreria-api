import {Router} from 'express';

import {getAutores, insertAutor} from '../controllers/autor.controller'
const router = Router();

router.get('/', getAutores);
router.post('/', insertAutor);

export default router;