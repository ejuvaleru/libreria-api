import {Router} from 'express';

import {getVentas,insertVenta,getVentaById} from '../controllers/venta.controller'
const router = Router();

router.get('/', getVentas);
router.post('/', insertVenta);
router.get('/:idVenta', getVentaById);

export default router;