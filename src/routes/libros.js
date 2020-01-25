import { Router } from 'express';
const router = Router();
import { getLibros, getLibroPorIsbn } from '../controllers/libro.controller';

router.get('/', getLibros);
router.get('/:isbn', getLibroPorIsbn);

export default router;