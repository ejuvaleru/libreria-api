import { Router } from 'express';
import { getRoles, getRolById } from '../controllers/rol.controller';

const router = Router();

router.get('/', getRoles);
router.get('/:idRol', getRolById);

export default router;