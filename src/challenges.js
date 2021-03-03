// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let calculo = (base * heigth) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(words) {
  let removeSpace = words.split(' ');
  return removeSpace;
}

// Desafio 4
function concatName(name) {
  let first = name.shift();
  let last = name.pop();
  let junction = last + ", " + first;
  return junction;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  let finalResult = resultWins + ties;
  return finalResult;
}

// Desafio 6
// Agradecimentos a Daniel Roberto Turma 10 - Tribo B, por ter me orientado aonde eu estava errando (for dentro de for ).
function highestCount(numbers) {
  let max = 0;
  let repete = 0;
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
  }
  for (let key in numbers) {
    if (max === numbers[key]) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 < distanciaCat2) {
    return "cat2";
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat1";
  } else if (distanciaCat1 === distanciaCat2) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
  // utilização de if & else
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
