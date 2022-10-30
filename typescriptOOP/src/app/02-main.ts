import { ProductMemoryService } from "./service/product-memory.service";

const productMemoryService = new ProductMemoryService();

productMemoryService.create({
  title: "Producto 1",
  price: 100,
  description: "Producto 1",
  category_id: 1,
  images: [],
});

const products = productMemoryService.getAll();
console.log(productMemoryService.getAll());

const productId = products[0].id;

productMemoryService.update(productId, {
  title: "Producto 1 actualizado",
});

const rta = productMemoryService.findOne(productId);
console.log(rta);

