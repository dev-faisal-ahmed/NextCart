import * as services from './services';

import { catchAsync } from '../../middlewares';
import { sendSuccessResponse } from '../../helpers';

export const getProducts = catchAsync(async (req, res) => {
  const { meta, products } = await services.getProducts(req.query);

  return sendSuccessResponse(res, {
    message: 'Product retrieved successfully',
    meta,
    data: products,
  });
});
