import { Router } from 'express';
import { BookController } from '../../controllers/book';

const router = Router();

router.post('/new-book', BookController.addBook);
router.get('/book', BookController.getBook);

export default router;
