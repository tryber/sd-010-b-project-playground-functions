// Desafio 1
function compareTrue(boo1, boo2) {
  let verdadeFalso = boo1 && boo2;
  return verdadeFalso;
}// Resposta: Criei dois parametros na função e comparei esses dois parametros na variavel verdadeiroFalso, Dei um return nessa variavel.

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}// Resposta: Fiz a formula dentro da variavel trangulo e dei um return nessa variavel.

// Desafio 3
function splitSentence(str) {
  let newArray = str.split(' ');
  return newArray;
} // Resposta: Nesse requisito criei um parametro str na function para receber qualquer string. Dentro da function criei uma variavel para receber a string tranformada em uma array de string. Para fazer isso usei o metodo split(), e usei o separador com uma string vazia. Fiz o return da variavel newArray. Link que tirei como base a minha solução:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Desafio 4
function concatName(arrayStr) {
  let strConcat = arrayStr[0].concat(arrayStr[arrayStr.length - 1]);
  return strConcat;
}// Resposta: Tentativa de concatenat o primeiro elemento com o ultimo usando o metodo concat(). Usando concat(), tentei fazer a concatenação acesando o primeiro elemento da array(arrayStr[0]) e acessando o ultimo elemento da array(arrayStr.length - 1).

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
