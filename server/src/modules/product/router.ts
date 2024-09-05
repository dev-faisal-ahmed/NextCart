import * as controller from './controller';
import { Router } from 'express';

export const productsRouter = Router();
productsRouter.get('/', controller.getProducts);
