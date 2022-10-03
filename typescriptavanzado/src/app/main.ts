import {addProduct} from './products/products.service';

addProduct({
  id: 'product',
  title: 'Product',
  updatedAt: new Date(),
  createdAt: new Date(),
  stock: 6
})
