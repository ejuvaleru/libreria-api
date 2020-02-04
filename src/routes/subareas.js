import {Router} from 'express';

import {getSubareas} from '../controllers/subarea.controller'
const router = Router();

router.get('/', getSubareas);
//router.post('/', insertEditorial);

export default router;