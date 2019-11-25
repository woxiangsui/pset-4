const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;
let integer = 0;
let isPrime = true;
let count = 2;

console.log();
do {
  integer = readlineSync.question("Non-negative integer: ");
} while (integer > MAX || integer < 0 || integer % 1 != 0 || Number.isNaN(integer) || integer == 1);

while (isPrime && !(count == (integer))) {

  if (integer % count==0) {
// print notprime
    console.log("\nNot prime.");
    isPrime = false;
  }
  count++
}

if (isPrime) {
  //print isprime
  console.log("\nPrime");
}
