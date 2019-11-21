const readlineSync = require("readline-sync");

let lowboundint = Number(readlineSync.question("\nLower bound: "));
let upboundint = Number(readlineSync.question("Upper bound: "));

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;
let sum = 0;
let i = lowboundint;

if (lowboundint > upboundint || lowboundint < MIN || upboundint > MAX) {
  do {
    lowboundint = Number(readlineSync.question("Lower bound: "));
    upboundint = Number(readlineSync.question("Upper bound: "));
  } while (lowboundint > upboundint);
    if (i % 2 != +0) {
      lowboundint = lowboundint + 1;
    }
      for (let i = lowboundint; i <= upboundint; i = i + 2) {
        sum = sum + i;
      } sum = sum.toLocaleString("en-US");
        console.log("\n" + sum + ".");
} else {
  if (i % 2 != +0) {
    lowboundint = lowboundint + 1;
  }
  for (let i = lowboundint; i <= upboundint; i = i + 2) {
    sum = sum + i;
  } sum = sum.toLocaleString("en-US");
    console.log("\n" + sum + ".");
}
