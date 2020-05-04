const Arithmetic = require("./Arithmetic");

const value = new Arithmetic(4)
  .plus(8)
  .plus(15)
  .minus(16)
  .minus(23)
  .plus(42)
  .plus(108)
  .value();
  
/* const a = new Arithmetic(4);
const b = a.plus(8);
const c = b.plus(15);
const d = c.minus(16);
const e = d.minus(23);
const f = e.plus(42);
const g = f.plus(108);
const v = g.value();

console.log(v); */

console.log(value);
