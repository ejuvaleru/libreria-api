import {Router} from 'express';

import {getEditoriales, insertEditorial, getMaxEditoriales, getEditorialById} from '../controllers/editorial.controller'
const router = Router();

router.get('/', getEditoriales);
router.post('/', insertEditorial);
router.get('/:idEditorial', getEditorialById);
router.get('/max/max', getMaxEditoriales); //CORREGIR

export default router;