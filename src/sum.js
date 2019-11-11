const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;
let lowboundint = 0;
let upboundint = 0;
let sum = lowboundint;
let value = lowboundint;
do {
    lowboundint = readlineSync.question("Lower bound: ");
    upboundint = readlineSync.question("Upper bound: ");
} while (lowboundint > upboundint);

while (sum <= upboundint) {
    value = value++;
    sum = value + sum;
}

console.log(sum);
