import {Router} from 'express';

import {getVentaMenu,insertVentaMenu} from '../controllers/venta.menu.controller'
const router = Router();

router.get('/', getVentaMenu);
router.post('/', insertVentaMenu);
//router.get('/:idVentaMenu', getVentaMenuById);

export default router;