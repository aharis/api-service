import { Router } from 'express';
import user from './r1/user';


const router = Router();

router.use('/r1', user);


export default router;