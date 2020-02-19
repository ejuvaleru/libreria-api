import {Router} from 'express';
import { getRoles } from '../controllers/rol.controller';

const router = Router();

 router.get('/', getRoles);

export default router;