import {Product} from './products.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  category_id: string;
}

type example = Pick<Product, 'title' | 'description'>;

export interface UpdateProductDto extends  Partial<CreateProductDto> {}

type example2 = Required<Product>;

export interface FindProductDto extends  Readonly<Partial <Product>> {}
