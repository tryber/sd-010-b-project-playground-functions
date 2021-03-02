// Desafio 1
function compareTrue(first, second) {
  let resultCompare;
  if (first && second === true) {
    resultCompare = true;
  } else {
    resultCompare = false;
  }
  return resultCompare;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(word) {
  // função split aprendida junto ao site: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings
  let sentence = word.split(" ");
  return sentence;
}

// Desafio 4
function concatName(arrayString) {
  let finalString = (arrayString[arrayString.length - 1] + ', ' + arrayString[0]);
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  //   Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.

  // Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
  let show
  for (let index = 0; index < arrayNumbers.length; index++) {
    let number = 0
    if (arrayNumbers[index] >= number) {
      number = arrayNumbers[index]
      show = show + 1
    };
  }
  return show;
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
