import { Router } from 'express';

import { getSubareas, getSubareasPorIdArea, insertSubArea, updateSubarea } from '../controllers/subarea.controller'
const router = Router();

router.get('/', getSubareas);
router.post('/', insertSubArea);
router.get('/byID_area/', getSubareasPorIdArea);
router.put('/:idSubarea', updateSubarea);

export default router;