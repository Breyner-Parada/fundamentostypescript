let unknownVar: unknown;
unknownVar = true;
unknownVar = 12;
unknownVar = 'true';
unknownVar = [true];

if(typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
