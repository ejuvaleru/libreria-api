import {Router} from 'express';

import {getSubsubtemas} from '../controllers/subsubtema.controller'
const router = Router();

router.get('/', getSubsubtemas);
//router.post('/', insertEditorial);

export default router;