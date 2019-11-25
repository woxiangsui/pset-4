const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;
let isPrime = true;
let count = 2;

let integer = Number(readlineSync.question("\n\nNon-negative integer: "));

while (integer > MAX || integer < 0 || Number.isNaN(integer) || !Number.isInteger(integer) || integer == 1 || integer == "") {
  integer = Number(readlineSync.question("Non-negative integer: "));
}

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
