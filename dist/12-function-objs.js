"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({
        email: 'test@test.com',
        password: 'test'
    });
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
