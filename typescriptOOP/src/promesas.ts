import axios from "axios";

(async() => {

  function delay() {
    const promesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Promesa resuelta');
      }, 2000);
    });
    return promesa;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  const rta = await delay();
  console.log(rta);

  const products = await getProducts();
  console.log(products.data);

})()
