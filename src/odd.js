const readlineSync = require("readline-sync");

let integer = Number(readlineSync.question("\n\nPositive integer: "));

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;
let number = 0;
let sum = 0;

while (integer <= 0 || MIN > integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Positive integer: "));
}
while (integer > 0) {
  number = integer % 10;
  integer = Math.floor(integer / 10);

  if (number % 2 == 1) {
    sum = sum + number;
  }
} console.log("\n" + sum + ".");
