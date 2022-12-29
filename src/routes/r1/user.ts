import { Router } from 'express';
import { UserController } from '../../controllers/user';
import { FormValidation } from '../../midllewares/validations/user';

const router = Router();

router
.post(
    '/user',
    FormValidation.validateAddUserForm,
    UserController.addUser,
  )

  export default router;