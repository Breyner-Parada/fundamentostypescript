"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const date = new Date(1998, 1, 28); // January=0, February=1, March=2, April=3....
const rta = (0, date_fns_1.subDays)(date, 30);
const str = (0, date_fns_1.format)(rta, 'yyyy/MM/dd');
console.log(str);
