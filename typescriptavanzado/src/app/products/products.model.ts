import {Category} from '../categories/category.model';

export type Sizes = 'M' | 'S' | 'L';
export interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  sizes?: Sizes;
  categories?: Category;
}
