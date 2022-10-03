import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'M' | 'S' | 'L';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  sizes?: Sizes;
  color: string;
  price: number;
  categories?: Category;
  isNew: boolean;
  tags: string[];
}

// type CreateProductDto = Omit <Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>



