function parseStr(arg: string): string[]
function parseStr(arg: string[]): string


// function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }
function parseStr(input: unknown): unknown {
  if(Array.isArray(input)) {
    return input.join('');
  } else if(typeof input === 'string') {
    return input.split('');
  }
}

const rta = parseStr('Breyner');
console.log('ToArray', 'Breyner => ', rta);

const rta2 = parseStr(['B', 'R', 'E', 'Y', 'N', 'E', 'R']);
console.log('ToString', "['B', 'R', 'E', 'Y', 'N', 'E', 'R'] => ", rta2);
