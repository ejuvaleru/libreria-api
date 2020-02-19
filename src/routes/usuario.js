import {Router} from 'express';
import { getUsuarios, getUsuario } from '../controllers/usuario.controller';

const router = Router();

router.get('/', getUsuarios);
router.get('/login', getUsuario)

export default router;