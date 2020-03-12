import {Router} from 'express';

import {getVentas,insertVenta,getVentaById,getMaxVentas} from '../controllers/venta.controller'
const router = Router();

router.get('/', getVentas);
router.post('/', insertVenta);
router.get('/:idVenta', getVentaById);
router.get('/max/max', getMaxVentas); //CORREGIR

export default router;