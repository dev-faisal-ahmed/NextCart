import { IMeta } from '../../../utils/types';
import { Product } from '../model';

export const getProducts = async (query: Record<string, any>) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 6;
  const category = query.category;

  const dbQuery: Record<string, any> = {};
  if (category) dbQuery.category = { $regex: category, $options: 'i' };

  const products = await Product.find(dbQuery)
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Product.countDocuments(dbQuery);
  const totalPages = Math.ceil(total / limit);

  const meta: IMeta = {
    page,
    limit,
    total,
    totalPages,
  };

  return { meta, products };
};
