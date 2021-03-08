// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(breakString) {
  return breakString.split(" ")
}

// Desafio 4
function concatName(arrayStrings) {
  if (Array.isArray(arrayStrings)) {
    if (arrayStrings.length > 0) {
      return arrayStrings[arrayStrings.length - 1] + arrayStrings[0]
    }
    else {
      return "Array can not be empty!"
    }
  }
  else {
    return "Input isn't a Array, please try again!"
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maxNumber = 0
  let maxNumberRepeat = 0

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > maxNumber) {
      maxNumber = arrayNumbers[i]
    }
  }

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === maxNumber) {
      maxNumberRepeat++
    }
  }

  return maxNumberRepeat
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
