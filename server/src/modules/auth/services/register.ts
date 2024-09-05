import { User } from '../../user/model';
import { TRegisterPayload } from '../validation';

export const register = async (payload: TRegisterPayload) => {
  const user = await User.create(payload);
  const { password, ...restInfo } = user.toObject();
  return restInfo;
};
