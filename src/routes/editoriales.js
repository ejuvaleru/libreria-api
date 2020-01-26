import {Router} from 'express';

import {getEditoriales} from '../controllers/editorial.controller'
const router = Router();

router.get('/', getEditoriales);

export default router;