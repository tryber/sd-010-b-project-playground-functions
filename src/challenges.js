// Desafio 1
function compareTrue(num1, num2) {
  if (num1 > 0 && num2 < 10){
    return true;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName() {

}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse() {

}
  
// Desafio 8
function fizzBuzz(numbers = []) {
  for (let i = 0; i >= numbers; i += 1)
  if (numbers % 3 === 0) {
    return "fizz";
  } else if (numbers % 5 === 0 ) {
    return "buzz";
  } else if ( numbers % 3 === 0 && numbers % 5 === 0) {
    return "fizzBuzz";
  } else {
    return "bug!";
  }    
}  
// Desafio 9
function encode() {
  
}
function decode() {
  
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
