import { Router } from 'express';

import { getAreas, insertArea, updateArea } from '../controllers/area.controller'
const router = Router();

router.get('/', getAreas);
router.post('/', insertArea);
router.put('/:idArea', updateArea);

export default router;