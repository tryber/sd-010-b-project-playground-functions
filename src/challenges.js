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
function highestCount(numbers) {
  let numbers = [];
  for(i = 0; i > numbers.length; i += 1){
    return Math.max(numbers.length);
  }
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);
  if (cat1Pos < cat2Pos) {
    return "cat1";
  } else if (cat2Pos < cat1Pos){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  let word  = "aeiou";
  for (let i = 0; i < word.length; i += 1)
  //return word.replaceAll('a','1').replaceAll('e','2').replaceAll('i','3').replaceAll('o','4').replaceAll('u','5');
  return word.replaceAll('a','1','e','2','i','3','o','4','u','5');
}
function decode() {
  let stringNumbers = "12345";
  for (let i = 0; i < word.length; i += 1)
  //return word.replaceAll('1','a').replaceAll('2','e').replaceAll('3','i').replaceAll('4','o').replaceAll('5','u');
  return stringNumbers.replaceAll('1','a','2','e','3','i','4','o','5','u');
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
