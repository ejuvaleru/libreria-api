import {Router} from 'express';

import {getTemas} from '../controllers/tema.controller'
const router = Router();

router.get('/', getTemas);
//router.post('/', insertEditorial);

export default router;