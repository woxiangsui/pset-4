const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;
let count = 1;
let answer = "";


let integer = Number(readlineSync.question("\n\nHeight: "));

while (integer > MAX || integer < MIN || Number.isNaN(integer) || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Height: "));
}

function star(a){
  let line = "";
  for (let i = 0; i < integer - a; i++){
    line += " ";
  }
  if(a == 1){
    console.log("");
  }
  else{
    star(a - 1);
  }

  line += "#";
  for(let i = 0; i < a; i++){
    line += "#";
    if (i == a - 1){
      console.log(line);
    }
  }

}

star(integer);
