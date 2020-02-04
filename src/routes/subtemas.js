import {Router} from 'express';

import {getSubtemas} from '../controllers/subtema.controller'
const router = Router();

router.get('/', getSubtemas);
//router.post('/', insertEditorial);

export default router;