import * as validation from './validation';
import * as controller from './controller';

import { Router } from 'express';
import { validationHandler } from '../../middlewares';

export const authRouter = Router();

authRouter.post(
  '/register',
  validationHandler(validation.registerValidationSchema),
  controller.register,
);

authRouter.post(
  '/login',
  validationHandler(validation.loginValidationSchema),
  controller.login,
);
