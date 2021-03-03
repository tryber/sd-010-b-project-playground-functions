// Desafio 1
function compareTrue(firstValue, secondValue) {
  // seu código aqui
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(phrase, letter) {
  // seu código aqui
  let word = '';
  let result = [];
  let spaces = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === letter) {
      spaces += 1;
      result.push(word);
      word = '';
      continue;
    }
    word += phrase[index];
    if (index >= phrase.length) {
      spaces += phrase[index];
      result.push(word);
    }
  } result.push(word);
  return result;
}// console.log(splitSentence('vamo que vamo', ' '));

// Desafio 4
function concatName(array = []) {
  // seu código aqui
  let endArray = '';
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      endArray = array[index];
    }
  }
  result = `${endArray}, ${array[0]}`;
  return result;
}// console.log(concatName(['foguete', 'não', 'tem', 'ré']));

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
