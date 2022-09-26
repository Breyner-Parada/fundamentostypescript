"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'test',
        createdAt: new Date(),
        stock: 1,
    });
    console.log(products);
})();
