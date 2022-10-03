import {Product} from './products.model';
export const products: Product[] = [];

export const addProduct = (product: Product) => {
  products.push(product);
}
