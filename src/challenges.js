// Desafio 1
function compareTrue(check1, check2) {
  let check3 = false;
  if ((check1 === true) && (check2 === true)) {
    check3 = true;
  }
  return check3;
}
console.log(compareTrue(true, false));

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
    if (string[i] === ' ' || string[i] === undefined) {
      array.push(help);
      help = '';
    } else if (string[i] !== ' ') {
      help += string[i];
    } 
  }
  return array;
}
console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(array) {
  let help = '';
  let first, last;
  for (let i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      last = array[i];
    } else if (i == 0) {
      first = array[i];
    }
  }
  return help = last + ', ' + first;
}
console.log(concatName(['foquete', 'não', 'tem', 'ré']));

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
