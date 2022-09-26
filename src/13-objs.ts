(() => {
  type Sizes = 'M' | 'S' | 'L';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };
  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  }
  addProduct({
    title: 'test',
    createdAt: new Date(),
    stock: 1,
  })

  console.log(products);

})()
