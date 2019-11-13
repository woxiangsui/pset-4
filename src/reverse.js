const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;
do {
  integer = readlineSync.question("Positive integer: ");
} while (integer <= 0 && integer < MIN || integer > MAX);
