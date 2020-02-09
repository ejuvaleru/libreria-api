import {Router} from 'express';

import {getTemas,getTemasPorIdSubarea} from '../controllers/tema.controller'
const router = Router();

router.get('/', getTemas);
router.get('/byID_subarea/', getTemasPorIdSubarea);
//router.post('/', insertEditorial);

export default router;