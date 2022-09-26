"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStocks = exports.addProduct = exports.products = void 0;
const products = [];
exports.products = products;
const addProduct = (data) => {
    products.push(data);
};
exports.addProduct = addProduct;
const calcStocks = () => {
    let total = 0;
    products.forEach(product => {
        total += product.stock;
    });
    return total;
};
exports.calcStocks = calcStocks;
