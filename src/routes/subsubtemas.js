import {Router} from 'express';

import {getSubsubtemas, getSubsubtemasPorIdSubtema} from '../controllers/subsubtema.controller'
const router = Router();

router.get('/', getSubsubtemas);
router.get('/byID_subtema/', getSubsubtemasPorIdSubtema);
//router.post('/', insertEditorial);

export default router;