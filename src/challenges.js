// Desafio 1
/*
   Essa função recebe dois booleano e retorna true se ambos os valores booleanos são verdadeiros e falso, caso contrário.
  */
function compareTrue(booleano1, booleano2) {
  return booleano1 && booleano2;
}

// console.log(`compareTrue(true, true) = ${compareTrue(true, true)}`);

// console.log(`compareTrue(true, false) = ${compareTrue(true, false)}`);

// console.log(`compareTrue(false, false) = ${compareTrue(false, false)}`);

// Desafio 2
/*
  Essa função recebe dois valores numéricos, a base e altura de um triangulo, calcula e retorna a area deste triangulo.
 */
function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(`calcArea(3, 4) = ${calcArea(3, 4)}`);

// console.log(`calcArea(2, 3) = ${calcArea(2, 3)}`);

// Desafio 3
/*
   Essa função recebe uma string e retorna um array de strings separadas por cada espaço na string original.
  */
function splitSentence(sentence) {
  let result = []; // inicializa result com array vazio
  let word = ''; // inicializa word com string vazia

  // percorre cada caracter de sentence
  for (let indexSentence = 0; indexSentence < sentence.length; indexSentence += 1) {
    // o caracter da posição indexSentence em sentence é armazenado em character
    let character = sentence.charAt(indexSentence);

    // constrói palavra: armazena em word se caracter diferente de espaço
    if (character !== ' ') {
      word += character;
    } else { // fim da construção da palavra
      result.push(word); // armazena word no array result
      word = ''; // reinicializa word com string vazia
    }
  }
  result.push(word); // armazena a última word construída no array result
  return result;
}

// let resp = splitSentence('');
// console.log(`splitSentence( ) = ${splitSentence('')}`);
// console.log(resp.length);

// console.log(`splitSentence(go Trybe) = ${splitSentence('go Trybe')}`);

// console.log(`splitSentence(vamo que vamo) = ${splitSentence('vamo que vamo')}`);

// console.log(`splitSentence(foguete) = ${splitSentence('foguete')}`);

// Desafio 4
/*
  Essa função recebe um array de strings e retorna uma string no formato 'ultimo_item, primeiro_item', sendo que primeiro_item e ultimo_item são a primeira e ultima posição do array recebido, respectivamente.
 */
function concatName(fullArray) {
  let firstItem = fullArray[0]; // armazena o primeiro item de fullArray em firstItem
  let lastItem = fullArray[fullArray.length - 1]; // armazena o ultimo item de fullArray em lastItem

  return `${lastItem}, ${firstItem}`; // retorna uma string no formato 'ultimo_item, primeiro_item'
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
