// Desafio 1
function compareTrue(Valeu1, Valeu2) {
  let Value1 = true;
  let Value2 = true;
  let result = false;
   
  if (Valeu1 == true && Valeu2 == true ){
    result = true;
  }
return result;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let areaT = (base*height)/2;
return areaT
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(" ");
  
  return result
}
console.log(splitSentence("Foguete"));

// Desafio 4
function concatName(arrStrings) {
  let result = "";

  result = arrStrings[(arrStrings.length - 1)] + ", " + arrStrings[0];
  return result
}
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  result = 0;

  result = wins*3 + ties*1;

  return result;
}
console.log(footballPoints(0, 0));

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
