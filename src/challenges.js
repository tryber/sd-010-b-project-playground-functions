// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');// separo as strings pelo espaõ em branco
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  return `${ultimoItem}, ${primeiroItem}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let total = wins + ties;
  return total;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorValor = 0;
  let aparicoes = 0;
  for (let index = 0; index < array.length; index += 1) { // primeiro encontro o maior valor
    if (maiorValor < array[index]) {
      maiorValor = array[index];
    }
  }
  for (let value = 0; value < array.length; value += 1) { // pego as ocorrencias dele no array
    if (maiorValor === array[value]) {
      aparicoes += 1;
    }
  }
  return aparicoes;
};
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 -= mouse
  cat2 -= mouse
  if (cat2 === cat1) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 < cat2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}
console.log(catAndMouse(1, 4, 3));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 7, 7));

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
