import {Router} from 'express';

import {getVentaEjemplar,insertVentaEjemplar} from '../controllers/venta.ejemplar.controller'
const router = Router();

router.get('/', getVentaEjemplar);
router.post('/', insertVentaEjemplar);
//router.get('/:idVentaEjemplar', getVentaEjemplarById);

export default router;