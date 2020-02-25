import { Router } from 'express';

import { getNomenclaturas, getNomenclaturasPorIDsDatos, insertNomenclatura, updateNomenclatura } from '../controllers/nomenclatura.controller'
const router = Router();

router.post('/', insertNomenclatura);
router.put('/:idNomenclatura', updateNomenclatura);
router.get('/datos/', getNomenclaturasPorIDsDatos);
router.get('/', getNomenclaturas);

export default router;