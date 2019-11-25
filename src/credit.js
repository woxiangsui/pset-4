const readlineSync = require("readline-sync");

const MAX = 24;
const MIN = 1;
let count = 1;
let answer = "";
let product = 0;
let psum = 0;
let a = "";


let integer = Number(readlineSync.question("\n\nNumber: "));

while (Number.isNaN(integer) || !Number.isInteger(integer)) {
  integer = Number(readlineSync.question("Number: "));
}
x = integer.toString();


if((x.length == 15) && (x.substr(0,2) === "34" || x.substr(0,2) === "37")){

  for (let i = 1; i <15; i+=2){
    product = parseInt(x.substr(i,1))*2;

    a = product.toString();
    for (let j = 0; j<a.length; j++){
      psum += parseInt(a.substr(j,1));
    }
  }
  for (let i = 0; i<15; i+=2){
    psum += parseInt(x.substr(i,1));
  }

  console.log("\nAmex.");
}
else if((x.length == 16) && (x.substr(0,2) === "51" || x.substr(0,2) === "52" || x.substr(0,2) === "53" || x.substr(0,2) === "54" || x.substr(0,2) === "55")){

  for (let i = 1; i <16; i+=2){
    product = parseInt(x.substr(i,1))*2;

    a = product.toString();
    for (let j = 0; j<a.length; j++){
      psum += parseInt(a.substr(j,1));
    }
  }
  for (let i = 0; i<16; i+=2){
    psum += parseInt(x.substr(i,1));
  }

  console.log("\nMastercard.");
}
else if ((x.length == 13) && x.substr(0,1) === "4") {

    for (let i = 1; i < 13; i+=2){
      product = parseInt(x.substr(i,1))*2;

      a = product.toString();
      for (let j = 0; j<a.length; j++){
        psum += parseInt(a.substr(j,1));
      }
    }
    for (let i = 0; i< (13); i+=2){
      psum += parseInt(x.substr(i,1));
    }

    console.log("\nVisa.");
  } else if ((x.length == 16) && x.substr(0,1) === "4") {
    for (let i = 1; i < 16; i+=2){
      product = parseInt(x.substr(i,1))*2;

      a = product.toString();
      for (let j = 0; j<a.length; j++){
        psum += parseInt(a.substr(j,1));
      }
    }
    for (let i = 0; i< 16; i+=2){
      psum += parseInt(x.substr(i,1));
    }

    console.log("\nVisa.");
  }
else {
  console.log("\nInvalid.")
}
