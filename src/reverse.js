const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;
let number = 0;
let digit = "";

let integer = Number(readlineSync.question("\n\nPositive integer: "));

while (integer > MAX || integer < MIN || Number.isNaN(integer) || !Number.isInteger(integer)) {
    integer = Number(readlineSync.question("Positive integer: "));
  } while (integer > 0) {
        number = integer % 10;
        integer = Math.floor(integer / 10);

        if (integer >= 1) {
          digit += number + ", ";
        } else {
          digit += number + ".";
        }
      } console.log("\n" + digit);
