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

// let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(`concatName(${array}) = ${concatName(array)}`);

// array = ['foguete', 'não', 'tem', 'ré'];
// console.log(`concatName(${array}) = ${concatName(array)}`);

// array = ['captain', 'my', 'captain'];
// console.log(`concatName(${array}) = ${concatName(array)}`);

// Desafio 5
/*
  Essa função calcula a quantidade de pontos que um time marcou em um campeonato. Para isso, recebe o número de vitórias (wins) e de empates (ties), calcula e retorna a quantidade de pontos marcados sendo que cada vitória vale 3 pontos e cada empate, 1 ponto.
 */
function footballPoints(wins, ties) {
  let winsPoints = wins * 3; // calcula a quantidade de pontos marcados com vitórias
  let tiesPoints = ties * 1; // calcula a quantidade de pontos marcados com empates
  let totalPoints = winsPoints + tiesPoints; // calcula a quantidade total de pontos marcados
  return totalPoints;
}

// console.log(`footballPoints(14, 8) = ${footballPoints(14, 8)} pontos`);

// console.log(`footballPoints(1, 2) = ${footballPoints(1, 2)} pontos`);

// console.log(`footballPoints(0, 0) = ${footballPoints(0, 0)} pontos`);

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
