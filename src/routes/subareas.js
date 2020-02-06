import {Router} from 'express';

import {getSubareas, getSubareasPorIdArea} from '../controllers/subarea.controller'
const router = Router();

router.get('/', getSubareas);
router.get('/byID_area/', getSubareasPorIdArea);
//router.post('/', insertEditorial);

export default router;