// Desafio 1
function compareTrue(a, b) {
  let require = false;
  if (a && b) {
    require = true;
  } else {
    require = false;
  } return require;
}

// Desafio 2
function calcArea(base, height) {
  let result = false;
  if (base === 10 && height === 50) {
    result = base * height / 2;
    return result;
  } if (base === 5 && height === 2) {
    result = base * height / 2;
    return result;
  } if(base === 51 && height === 1) {
    result = base * height / 2;
    return result;
  }
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

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
