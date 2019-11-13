const readlineSync = require("readline-sync");

let lowboundint = Number(readlineSync.question("\nLower bound: "));
let upboundint = Number(readlineSync.question("Upper bound: "));

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

let sum = 0;
let value = 0;

do {
    lowboundint = Number(readlineSync.question("Lower bound: "));
    upboundint = Number(readlineSync.question("Upper bound: "));
} while (lowboundint > upboundint)

for (let value = 0; value <= upboundint; value++) {
  sum = sum + value;
  console.log(sum);
}
