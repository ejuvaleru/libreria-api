import {Router} from 'express';

import {getMenus, insertMenu,getMenuById} from '../controllers/menu.controller'
const router = Router();

router.get('/', getMenus);
router.post('/', insertMenu);
router.get('/:idMenu', getMenuById);

export default router;