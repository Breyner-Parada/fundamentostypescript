"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'test1',
    createdAt: new Date(),
    stock: 1,
});
(0, product_service_1.addProduct)({
    title: 'test2',
    createdAt: new Date(),
    stock: 34,
});
(0, product_service_1.addProduct)({
    title: 'test3',
    createdAt: new Date(),
    stock: 12,
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStocks)();
console.log(total);
