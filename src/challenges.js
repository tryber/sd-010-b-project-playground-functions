// Desafio 1
function compareTrue(v1, v2) {
  return v1 === true && v2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ', ' + arr[0];
}

// Desafio 5
function footballPoints(W,T) {
  return W *3 + T;
}

// Desafio 6
function highestCount(num) {
  let high = Math.max.apply(null,  num);
  let count = 0;
  for(let i = 0; i < num.length; i++){
    if(num[i] === high){
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
