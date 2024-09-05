import { AppError } from '../../../utils';
import { User } from '../../user/model';
import { TLoginPayload } from '../validation';

export const login = async (payload: TLoginPayload) => {
  const isUserExist = await User.isUserExist(payload.email);
  if (!isUserExist) throw new AppError('User does not exist', 404);

  const { name, email, password } = isUserExist;
  const isPasswordMatch = User.isPasswordMatch(payload.password, password);
  if (!isPasswordMatch) throw new AppError('Password does not match', 400);

  const accessToken = User.generateAccessToken({ name, email });

  return { accessToken };
};
