import { Router } from 'express';
import { BookController } from '../../controllers/book';

const router = Router();

router

  .post('/new-book', BookController.addBook)

  export default router;