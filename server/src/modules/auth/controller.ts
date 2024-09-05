import * as services from './services';
import { catchAsync } from '../../middlewares';
import { sendSuccessResponse } from '../../helpers';

export const register = catchAsync(async (req, res) => {
  const user = await services.register(req.body);

  return sendSuccessResponse(res, {
    message: 'Registration was successful',
    data: user,
  });
});
