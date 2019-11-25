const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let count = 0;
let sum = 0;
let average = 0;
let integer = 0;
let isFalse = true;
console.log();

while (isFalse){
  integer = Number(readlineSync.question("Non-negative integer: "));
  if (integer >= MIN && integer <= MAX ){
    sum += integer;
    count ++;

  }
  else if (integer<0){
    isFalse = false;
  }

}

average = sum / count;
average = average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3 });



console.log("\n" + average + ".");
