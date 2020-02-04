import {Router} from 'express';

import {getAreas} from '../controllers/area.controller'
const router = Router();

router.get('/', getAreas);
//router.post('/', insertEditorial);

export default router;