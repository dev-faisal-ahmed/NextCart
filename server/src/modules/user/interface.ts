import { Model, Schema } from 'mongoose';

export interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

export interface IUserModel extends Model<IUser> {
  isUserExist(email: string): Promise<IUser>;
  isPasswordMatch(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
  generateAccessToken(user: Pick<IUser, 'name' | 'email'>): string;
}
