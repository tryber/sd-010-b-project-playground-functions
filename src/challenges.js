
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo === true) return true;
  return false;
  }

  function calcArea(base, heigth) {
  let calculo = ((base * heigth) / 2);
  return calculo;
 }

// Desafio 3
function splitSentence(text) {
  let result = text.split(" ");
  return result 
}

// Desafio 4
function concatName(words) {
  return `${words[words.length - 1]}, ${words[0]}`;
}
// Desafio  
function footballPoints(wins, ties) {
  let totalPoints = ((wins * 3) + ties);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayGrande) {
  let contador = arrayGrande.length;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let numberCat1 = Math.abs(cat1 - mouse);
  let numberCat2 = Math.abs(cat2 - mouse);
  if (numberCat1 === numberCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (numberCat1 < numberCat2) {
    return 'cat1';
  }
  return 'cat2';
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
