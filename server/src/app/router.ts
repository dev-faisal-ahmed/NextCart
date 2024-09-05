import { Router } from 'express';
import { authRouter } from '../modules/auth/router';
import { productsRouter } from '../modules/product/router';

export const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/products', productsRouter);
