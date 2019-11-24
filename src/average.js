const readlineSync = require("readline-sync");

let integer = Number(readlineSync.question("\nNon-negative integer: "));

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let number = 0;
let sum = 0;

if (integer >= 0 && MIN <= integer <= MAX && !Number.isNaN(integer) && integer % 1 == 0) {
  do {
    integer = Number(readlineSync.question("Non-negative integer: "));
    sum = sum + integer;
    ++number;
  } while (integer >= 0 && MIN <= integer <= MAX);
} else if (Number.isNaN(integer) && integer % 1 != 0) {
    --number;
}

average = sum / number;
average = average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3});
console.log("\n" + average + ".");
