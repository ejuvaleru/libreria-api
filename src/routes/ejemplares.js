import { Router } from 'express';
const router = Router();
import { getEjemplares, getEjemplaresPorLibroId, insertarEjemplar, getEjemplarPorId, updateEjemplarPorId, deleteEjemplarPorId } from '../controllers/ejemplar.controller';

// Create Read Update Delete
router.post('/', insertarEjemplar);
router.get('/:idEjemplar', getEjemplarPorId);
router.put('/:idEjemplar', updateEjemplarPorId);
router.delete('/:idEjemplar', deleteEjemplarPorId);

// Obtener todos los ejemplares
router.get('/', getEjemplares);
// router.get('/:idLibro', getEjemplaresPorLibroId);

export default router;