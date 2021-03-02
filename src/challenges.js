// Desafio 1
function compareTrue(valor1, valor2) {
  const bool = valor1 && valor2;

  return bool;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  /* //Jeito simples:
  const arrayOfStrings = string.split("");
  */

  //Jeito menos simples:
  let arrayOfStrings = [];
  let word = "";

  for (let index in string) {
    if (string[index] === " ") {
      arrayOfStrings.push(word);
      word = "";
      continue;
    }

    word += string[index];
  }
  arrayOfStrings.push(word);

  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  const concatenated = `${array[(array.length - 1)]}, ${array[0]}`;

  return concatenated;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

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
