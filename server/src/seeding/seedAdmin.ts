import mongoose from 'mongoose';
import { ADMIN_ID, ADMIN_PASSWORD, MONGO_URI } from '../app/config';

export const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI!);

    console.log('************* START *************');
    console.log('UserId :', ADMIN_ID);
    console.log('Password :', ADMIN_PASSWORD);
    console.log('************* END *************');
  } catch (error) {
    console.log('************* ERROR *************');
    console.log('Error :', error.message);
    console.log('************* END *************');
  } finally {
    await mongoose.disconnect();
  }
};

seedAdmin();
