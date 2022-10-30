import {Product} from '../models/product.model';
import {CreateProductDto, UpdateProductDto} from '../dtos/product.dto';
import { faker } from '@faker-js/faker';
export const products: Product[] = [];


export class ProductMemoryService {

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.category_id,
        name: faker.commerce.productName(),
        image: faker.image.imageUrl(),
      }
    }
    return this.add(newProduct);
  }

  add(product: Product): Product {
    products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = products.findIndex(p => p.id === id);
    const prevData = products[index];
    products[index] = {
      ...prevData,
      ...changes,
    }
    return prevData;
  }

  findOne(id: Product['id']) {
    return products.find(p => p.id === id);
  }

}






export const deleteProduct = (id: string) => {
  //
}
// export const findProduct = (): Product[] =>  products;

// export const findProductsBy = (dto: FindProductDto ): Product[] => {
//   //
//   return products;
// }
