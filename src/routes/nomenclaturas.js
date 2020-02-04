import {Router} from 'express';

import {getNomenclaturas, getNomenclaturasPorIDsDatos} from '../controllers/nomenclatura.controller'
const router = Router();

router.get('/', getNomenclaturas);
router.get('/datos/', getNomenclaturasPorIDsDatos);

export default router;