import { Router } from 'express';

import { getSubsubtemas, getSubsubtemasPorIdSubtema, insertSubsubtema, updateSubsubtema } from '../controllers/subsubtema.controller'
const router = Router();

router.post('/', insertSubsubtema);
router.put('/:idSubsubtema', updateSubsubtema);
router.get('/byID_subtema/', getSubsubtemasPorIdSubtema);
router.get('/', getSubsubtemas);

export default router;