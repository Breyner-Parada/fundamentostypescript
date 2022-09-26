const withOutEnd = () => {
  while (true) {
    console.log('Nunca pares de aprender');
  }
}

const fail = (msg: string) => {
  throw new Error(msg);
}

const example = (input: unknown) => {
  if (typeof input ==='string') {
    return 'input es un string';
  } else if ( Array.isArray(input)) {
    return 'input es un array';
  }
  return fail('not matched');
}

console.log('example: ' + example('hola'));
console.log('example: ' + example([1,2,3]));
console.log('example: ' + example(45)); // Here stop the program
console.log('example: ' + example('Despues del fail'));
