// Desafio 1
function compareTrue(first,second) {
  // seu código aqui
  // JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

  // Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

  // Retorne true se ambos os valores são verdadeiros;
  // Retorne false se um ou ambos os parâmetros forem falsos.
  // Faça a função utilizando o operador &&.

  // O que será verificado:

  // Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true

  // Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false

  // Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true
  if (first == true && second == true){
    return true;
  } if else (first == true && second == false) {
    return false;
  } else {
    return false;
    
  }
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
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
