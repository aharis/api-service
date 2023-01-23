import { Router } from 'express';
import user from './r1/user';
import book from './r1/book'


const router = Router();

router.use('/r1', user);
router.use('/r1', book);


export default router;