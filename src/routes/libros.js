import { Router } from 'express';
const router = Router();
import { getLibros, getLibroPorIsbn, insertLibro, getLibroPorId, updateLibroPorId, deleteLibroPorId, getMaxLibro } from '../controllers/libro.controller';

// Create Read Update Delete
router.post('/', insertLibro);
router.get('/:idLibro', getLibroPorId);
router.put('/:idLibro', updateLibroPorId);
router.delete('/:idLibro', deleteLibroPorId); 

// 
router.get('/', getLibros);
// router.get('/porisbn/:isbn', getLibroPorIsbn);
router.get('/max/max', getMaxLibro); //CORREGIR

export default router;