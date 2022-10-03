import {Product} from './products.model';
import {CreateProductDto, UpdateProductDto, FindProductDto} from './product.dto';
import { faker } from '@faker-js/faker';
export const products: Product[] = [];

export const addProduct = (product: CreateProductDto): Product => {
  const newProduct = {
    ...product,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  }
  products.push(newProduct);
  return newProduct;
}
export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(p => p.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  }
  return prevData;
}
export const deleteProduct = (id: string) => {
  //
}
export const findProduct = (): Product[] =>  products;

export const findProductsBy = (dto: FindProductDto ): Product[] => {
  //
  return products;
}
