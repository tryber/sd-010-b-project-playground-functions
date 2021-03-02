// Desafio 1
function compareTrue(num1, num2) {
  // seu código aquiaa
  if((num1===true) && (num2===true)){
    return true;
  }else
  return false;
}



// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

//split divide frase
// Desafio 3
function splitSentence(Strings) {
  return Strings.split(" ");
}


// Desafio 4
function concatName(array) {
  return `${array[array.length -1]},${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins + ties ;
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
}
