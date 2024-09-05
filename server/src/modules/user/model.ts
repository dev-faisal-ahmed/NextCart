import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { model, Schema } from 'mongoose';
import { IUser, IUserModel } from './interface';
import { ACCESS_TOKEN_SECRET, SALT } from '../../app/config';

const userSchema = new Schema<IUser, IUserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// hooks
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await bcrypt.hash(this.password, SALT);
    next();
  } catch (error) {
    return next(error);
  }
});

// statics methods
userSchema.statics.isUserExist = async function (email: string) {
  return await this.findOne({ email });
};

userSchema.statics.isPasswordMatch = async function (
  givenPassword: string,
  savedPassword: string,
) {
  return await bcrypt.compare(givenPassword, savedPassword);
};

userSchema.statics.generateAccessToken = function (
  user: Pick<IUser, 'name' | 'email'>,
) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET);
};

export const User = model<IUser, IUserModel>('user', userSchema);
