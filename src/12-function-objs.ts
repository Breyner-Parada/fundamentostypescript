(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'test@test.com',
    password: 'test'
  });
  type Sizes = 'M' | 'S' | 'L';
  const products: any[] = [];
  const addProduct = (data: {title: string, createdAt: Date, stock: number, size?: Sizes}) => {
    products.push(data);
  }
  addProduct({
    title: 'test',
    createdAt: new Date(),
    stock: 1,
  })

  console.log(products);

})()
