import {Router} from 'express';

import {insertarAutorLibro} from '../controllers/autor.libro.controller'
const router = Router();

router.post('/', insertarAutorLibro);

export default router;