// Requisito 1 - Verificar se dois valores são verdadeiros
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}
console.log(compareTrue(false, true)); // -> false
console.log(compareTrue(false, false)); // -> false
console.log(compareTrue(true, true)); // -> true

// Requisito 2 - Calcular a área de um triángulo
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50)); // -> 250
console.log(calcArea(5, 2)); // -> 5
console.log(calcArea(51, 1)); // -> 25.5

// Requisito 3 - Dividir a frase nos espaços entre as palavras
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence('go Trybe')); // -> ['go', 'Trybe']
console.log(splitSentence('vamo que vamo')); // -> ['vamo', 'que', 'vamo']
console.log(splitSentence('foguete')); // -> ['foguete']

// Requisito 4 - Receber uma array de strings e retornar uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // -> Paolillo, Lucas
console.log(concatName(['foguete', 'não', 'tem', 'ré'])); // -> 'ré, foguete'
console.log(concatName(['captain', 'my', 'captain'])); // -> 'captain, captain'

// Requisito 5 - retornar a pontuação de um time a partir do número de vitórias(3pts) e empates(1pt)
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(14, 8)); // -> 50
console.log(footballPoints(1, 2)); // -> 5
console.log(footballPoints(0, 0)); // -> 0

// Requisito 6 - Retornar a quantidades de vezes que o maior número de um array se repete
function highestCount(numbers) {
  let higherNumber = 0;
  let counter = 0;
  for (const i in numbers) {
    if (numbers[i] > higherNumber) {
      higherNumber = numbers[i];
      counter = 0;
    }
  }
  for (const i in numbers) {
    if (numbers[i] == higherNumber) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); // -> 2
console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); // -> 1
console.log(highestCount([0, 0, 0])); // -> 3

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
