const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

do {
    lowboundint = Number(readlineSync.question("Lower bound: "));
    upboundint = Number(readlineSync.question("Upper bound: "));
} while (lowboundint > upboundint);

let sum = 0;
let i = lowboundint;

if (i % 2 != +0) {
  lowboundint = lowboundint + 1;
}
for (let i = lowboundint; i <= upboundint; i = i + 2) {
  sum = sum + i;
}

sum = sum.toLocaleString("en-US");
console.log("\n" + sum + ".");
