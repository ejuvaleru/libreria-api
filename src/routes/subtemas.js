import {Router} from 'express';

import {getSubtemas,getSubtemasPorIdTema} from '../controllers/subtema.controller'
const router = Router();

router.get('/', getSubtemas);
router.get('/byID_tema/', getSubtemasPorIdTema);
//router.post('/', insertEditorial);

export default router;