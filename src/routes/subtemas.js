import { Router } from 'express';

import { getSubtemas, getSubtemasPorIdTema, insertSubtema, updateSubtema } from '../controllers/subtema.controller'
const router = Router();

router.post('/', insertSubtema);
router.get('/byID_tema/', getSubtemasPorIdTema);
router.put('/:idSubtema', updateSubtema);
router.get('/', getSubtemas);

export default router;