import { model, Schema } from 'mongoose';
import { IProduct } from './interface';

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number },
});

export const Product = model<IProduct>('product', productSchema);
