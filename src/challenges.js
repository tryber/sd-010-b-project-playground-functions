// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  } else {
    return false;
  }
}
console.log (compareTrue(false, true));
console.log (compareTrue(false, false));
console.log (compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}
console.log (calcArea (10, 50));
console.log (calcArea (5, 2));
console.log (calcArea (51, 1));

// Desafio 3
function splitSentence(words) {
   separeted = words.split(" ");
    return separeted
}
console.log(splitSentence("go trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

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
