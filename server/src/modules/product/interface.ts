import { Schema } from 'mongoose';

export interface IProduct {
  _id: Schema.Types.ObjectId;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  discount: number;
}
