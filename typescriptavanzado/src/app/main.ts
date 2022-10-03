import {faker} from '@faker-js/faker';
import {addProduct, findProduct, products, updateProduct} from './products/products.service';


for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    sizes: faker.helpers.arrayElement(['S', 'M', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    stock: Number(faker.random.numeric(2)),
    category_id: faker.datatype.uuid(),
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 45
});

findProduct();
