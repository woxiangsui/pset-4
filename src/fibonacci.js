const readlineSync = require("readline-sync");

const MAX = 78;
const MIN = 0;
let integer = 0;
let fib = 1;
let a = 0;

console.log("\n");
do {
  integer = Number(readlineSync.question("Positive integer: "));
} while (integer > MAX || integer < 0 || !Number.isInteger(integer) || Number.isNaN(integer) || integer == "");


for (let i = 0; i <integer-1; i++){
  let temp = fib;
  fib += a;
  a = temp;
}
fib = fib.toLocaleString("en");
console.log("\n" + fib + ".");
