import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'M' | 'S' | 'L';
export interface Product extends BaseModel {
  title: string;
  stock: number;
  sizes?: Sizes;
  categories?: Category;
}
