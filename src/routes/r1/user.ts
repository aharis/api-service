import { Router } from 'express';
import { UserController } from '../../controllers/user';

const router = Router();

router
.post(
    '/user',
    UserController.addUser,
  )

  export default router;