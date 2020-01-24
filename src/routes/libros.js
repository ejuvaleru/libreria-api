import { Router } from 'express';
const router = Router();
import { getLibros, getLibroPorIdAutor } from '../controllers/libro.controller';

router.get('/', getLibros);
// router.get('/:idAutor', getLibroPorIdAutor);

export default router;