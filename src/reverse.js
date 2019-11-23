const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;
let number;
let digit = "";

let integer = readlineSync.question("\n\nPositive integer: ");

while (integer > MAX || integer < MIN || Number.isNaN(integer) || Number.isInteger(integer)) {
    integer = readlineSync.question("Positive integer: ");
  } while (integer > 0) {
        let number = integer % 10;
        integer = Math.floor(integer / 10);
        if (integer >= 1) {
          digit += number + ", ";
        } else {
          digit += number + ".";
        }
      } console.log("\n" + digit);
