// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  // seu código aqui
  if (booleanValue1 === true && booleanValue2 === true){
    return true;
  }
  else{
    return false;
  }
}//console.log(compareTrue(false,false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}//console.log(calcArea(10,50));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ")
}//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1]+ ', ' + array[0];
}//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return 3*wins + ties;
}//console.log(footballPoints(14,8));

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
