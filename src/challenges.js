// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let phraseSplit = phrase.split(" ");
  return phraseSplit;
}

//(PT-BR): Para executar esse exercício fiz pesquisas e encontrei um material muito bom explicando como utilizar o .split no seguinte site: https://www.w3schools.com/jsref/jsref_split.asp

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let last = (arrayStrings.length) - 1
  return (`${arrayStrings[last]}, ${arrayStrings[0]}`)
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointsWins = wins * 3
  let pointsTies = ties * 1
  let allPoints = pointsWins + pointsTies
  return allPoints
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let greather = arrayNumbers[0]
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > greather) {
      greather = arrayNumbers[index]
    }
  }
  let arrayHighestNumber = 0
  for (let index = 0; index < arrayNumbers.length; index+= 1) {
    if (arrayNumbers[index] === greather) {
       arrayHighestNumber = arrayHighestNumber + 1
    }
  }
  return arrayHighestNumber
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
