import {addProduct, calcStocks, products} from './product.service';

addProduct({
  title: 'test1',
    createdAt: new Date(),
    stock: 1,
});
addProduct({
  title: 'test2',
    createdAt: new Date(),
    stock: 34,
});
addProduct({
  title: 'test3',
    createdAt: new Date(),
    stock: 12,
});

console.log(products);
const total = calcStocks();
console.log(total);
