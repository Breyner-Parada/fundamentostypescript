import {addProduct} from './products/products.service';

addProduct({
  id: 'product',
  title: 'Product',
  createdAt: new Date(),
  stock: 6
})
