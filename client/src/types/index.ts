export interface IUser {
  name: string;
  email: string;
}

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  discount: number;
}
