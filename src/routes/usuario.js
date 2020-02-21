import {Router} from 'express';
import { getUsuarios, iniciarSesion, createUser } from '../controllers/usuario.controller';

const router = Router();

router.get('/', getUsuarios);
router.post('/auth', iniciarSesion)
router.post('/', createUser);
export default router;