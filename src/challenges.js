// Desafio 1
function compareTrue(num1, num2) {
  if (num1 > 0 && num2 < 10){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base*heigth)/2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName() {
  names = ['foguete','não','tem','ré'];
  return names[names.length-1] + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
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
