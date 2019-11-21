const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;

let integer = readlineSync.question("\nPositive integer: ");

if (Number.isNaN(integer) || Number.isInteger(integer) || integer <= 0 && integer < MIN || integer > MAX) {
  do {
    integer = readlineSync.question("Positive integer: ");
  } while (integer <= 0 && integer < MIN || integer > MAX ||Number.isNaN(integer) || Number.isInteger(integer));

    
} else {
  console.log("No.");
}
