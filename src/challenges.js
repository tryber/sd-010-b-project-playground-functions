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
function footballPoints() {
  // seu código aqui
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
