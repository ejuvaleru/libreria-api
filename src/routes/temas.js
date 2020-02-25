import { Router } from 'express';

import { getTemas, getTemasPorIdSubarea, insertTema, updateTema } from '../controllers/tema.controller'
const router = Router();

router.get('/', getTemas);
router.post('/', insertTema);
router.put('/:idTema', updateTema);
router.get('/byID_subarea/', getTemasPorIdSubarea);

export default router;