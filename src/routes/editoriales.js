import {Router} from 'express';

import {getEditoriales, insertEditorial, getMaxEditoriales} from '../controllers/editorial.controller'
const router = Router();

router.get('/', getEditoriales);
router.post('/', insertEditorial);
router.get('/max/', getMaxEditoriales); //CORREGIR

export default router;