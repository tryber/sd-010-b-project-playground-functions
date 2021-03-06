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
  names = [];
  return names[names.length-1] + ',' + names[0];
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
  let word  = "aeiou";
  return word.replaceAll('a','1').replaceAll('e','2').replaceAll('i','3').replaceAll('o','4').replaceAll('u','5');
}
function decode() {
  let stringNumbers = "12345";
  return stringNumbers.replaceAll('1','a').replaceAll('2','e').replaceAll('3','i').replaceAll('4','o').replaceAll('5','u');
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
