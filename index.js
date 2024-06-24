const fs = require("fs");
const marr = [1, 2, 3, 4, 5, 89, 24, 86, -100];
//Sum of array elements
function add(arra) {
  const resulta = arra.reduce((acc, curr) => acc + curr, 0);
  //    console.log(resulta)
  return resulta;
}
//Multiplication of array elements
function mul(arrm) {
  const resultm = arrm.reduce((acc, curr) => acc * curr, 1);
  //    console.log(resulta)
  return resultm;
}
//Average of array elements
function average(arrav) {
  const resultav = arrav.reduce((acc, curr) => acc + curr, 0);
  const avg = Math.floor(resultav / arrav.length);
  //    console.log(resulta)
  return avg;
}
//Odd numbers in an array
function odd(arro) {
  const oddn = arro.filter((num) => num % 2 != 0);
  return oddn;
}
//Even numbers in an array
function even(arre) {
  const evenn = arre.filter((num) => num % 2 === 0);
  return evenn;
}

//Maximum number in an array
function maxnumber(arrmax) {
  return Math.max(...arrmax);
}
//Minimum number in an array
function minnumber(arrmin) {
  return Math.min(...arrmin);
}
//Reverse an array
function reverse(arrrev) {
  return arrrev.reverse();
}
//Sorting an array in ascending order
function sortasc(arrasc) {
  return arrasc.sort((a, b) => a - b);
}

//Sorting an array in descending order
function sortdesc(arrdesc) {
  return arrdesc.sort((a, b) => b - a);
}

// console.log(sortdesc(marr));

module.exports = {
  add,
  mul,
  average,
  odd,
  even,
  maxnumber,
  minnumber,
  reverse,
  sortasc,
  sortdesc,
};
