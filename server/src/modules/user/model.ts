import bcrypt from 'bcrypt';
import { SALT } from '../../app/config';
import { model, Schema } from 'mongoose';
import { IUser, IUserModel } from './interface';

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
// method will be written here

export const User = model<IUser, IUserModel>('user', userSchema);
