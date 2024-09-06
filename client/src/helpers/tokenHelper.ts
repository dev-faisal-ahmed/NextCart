import { IUser } from '@/types';
import { jwtDecode } from 'jwt-decode';

const ACCESS_TOKEN = 'accessToken';

export const getUserFromLocal = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (!token) return null;

  const user = jwtDecode(token);
  if (!user) return null;

  return user as IUser;
};
