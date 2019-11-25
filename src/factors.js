const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;
let count = 1;
let answer = "";

let integer = Number(readlineSync.question("\n\nPositive integer: "));

while (integer <= 0 || MIN > integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Positive integer: "));
}

while (!(count == (integer))) {

  if (integer % count == 0) {
    answer += count + ", ";
  }
  count++;

}
answer += count + "."
console.log("\n" + answer);
