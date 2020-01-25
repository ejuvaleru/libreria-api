import { Router } from 'express';
const router = Router();
import { getEjemplares, getEjemplaresPorLibroId } from '../controllers/ejemplar.controller';

router.get('/', getEjemplares);
router.get('/:idLibro', getEjemplaresPorLibroId);

export default router;