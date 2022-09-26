// ---------------------one way

export const createProduct = (id: string | number,  isNew?: boolean, stock?: number) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const p = createProduct(1, true, 12);

console.log(p);

//-------------------another way

const createProduct2 = (id: string | number, isNew: boolean = true, stock: number = 10) => ({id, stock, isNew})

const p1 = createProduct2(1, true, 12)
console.log(p1)
const p2 = createProduct2(1)
console.log(p2)
const p3 = createProduct2(1, false, 0)
console.log(p3)
