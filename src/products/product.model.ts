type Sizes = 'M' | 'S' | 'L';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  export {
    Product,
    Sizes,
  }
