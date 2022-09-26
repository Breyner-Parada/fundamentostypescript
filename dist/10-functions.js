"use strict";
(() => {
    function createProductToJson(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    }
    const producto1 = createProductToJson('producto1', new Date(), 12, 'M');
    console.log(producto1);
    console.log(producto1.title);
    const createProductToJsonV2 = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    };
    const producto2 = createProductToJsonV2('producto1', new Date(), 12);
    console.log(producto2);
    console.log(producto2.title);
})();
