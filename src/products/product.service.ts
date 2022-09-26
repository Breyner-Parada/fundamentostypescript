import {Product} from './product.model';

const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  }

  const calcStocks = () => {
    let total = 0;
    products.forEach(product => {
      total += product.stock;
    });
    return total;
  }

export {
  products,
  addProduct,
  calcStocks
}
