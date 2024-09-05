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

export const login = catchAsync(async (req, res) => {
  const { accessToken } = await services.login(req.body);

  return sendSuccessResponse(res, {
    message: 'Successfully logged in',
    data: { accessToken },
  });
});
