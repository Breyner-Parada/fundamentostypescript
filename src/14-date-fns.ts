import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // January=0, February=1, March=2, April=3....

const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');
console.log(str);
