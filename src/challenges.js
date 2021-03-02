// Desafio 1
function compareTrue(check1, check2) {
  let check3 = false;
  if ((check1 === true) && (check2 === true)) {
    check3 = true;
  }
  return check3;
}
let check1 = true;
let check2 = false;
console.log(compareTrue(check1, check2));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
let base = 51;
let height = 1;
console.log(calcArea(base, height));

// Desafio 3
function splitSentence(string) {
  let array = [];
  let help = '';
  for (let i = 0; i <= string.length; i += 1) {
    if(string[i] === ' ' || string[i] === undefined) {
      array.push(help);
      help = '';
    } else if (string[i] !== ' ') {
      help += string[i];
    }    
  }
  return array;
}
let string = 'Go trybe';
console.log(splitSentence(string));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
