type Sizes = 'M' | 'S' | 'L';
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  sizes?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 'product',
  title: 'Product',
  createdAt: new Date(),
  stock: 6
})
