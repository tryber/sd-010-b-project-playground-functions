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
/*
  Essa função recebe um array de números e retorna o maior deles.
 */
function highestNumber(array) {
  let highest = array[0]; // considera o primeiro item do array como o maior

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > highest) { // se outro item do array é maior que o armazenado em highest
      highest = array[index]; // atualiza highest com este item encontrado
    }
  }

  return highest; // retorna o maior número encontrado no array
}

/*
  Essa função recebe um array de números e retorna a quantidade de vezes que o maior deles se repete.

  Foi utilizado o loop for...of para obter diretamente o valor de cada posição e como ele não será modificado dentro do loop, a variavel number foi declarada como const.

  Material consultado sobre o loop for...in
  https://www.w3schools.com/js/js_loop_forin.asp
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in

  Material consultado sobre o loop for...of
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
 */
function highestCount(array) {
  let highest = highestNumber(array); // armazena o maior número do array em highest
  let repetitionCount = 0; // inicializa o contador de repetições para este maior número

  for (const number of array) { // para cada número armazenado no array
    if (number === highest) { // se o número for o maior
      repetitionCount += 1; // contabiliza a repetição em repetitionCount
    }
  }

  return repetitionCount; // retorna a quantidade de vezes que o maior número foi encontrado
}

// let array = [9, 1, 2, 3, 9, 5, 7];
// console.log(`highestCount(${array}) = ${highestCount(array)}`);

// array = [0, 4, 4, 4, 9, 2, 1];
// console.log(`highestCount(${array}) = ${highestCount(array)}`);

// array = [0, 0, 0];
// console.log(`highestCount(${array}) = ${highestCount(array)}`);

// Desafio 7
/*
  Essa função recebe duas posições em uma reta e retorna a distância entre elas.

  Material consultado sobre a função Math.abs(x)
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 */
function linearDistance(position1, position2) {
  // para calcular a distância entre duas posições, deve-se realizar a diferença entre elas.
  // como não há distância negativa, devemos retornar o valor absoluto utilizando a function Math.abs
  return Math.abs(position2 - position1);
}

/*
  Essa função recebe as posições (em uma reta) de mouse, cat1 e cat2, calcula as distâncias entre o rato e os gatos e retorna qual dos felinos irá alcançar o rato primeiro (sendo aquele que está mais perto).
 */
function catAndMouse(mouse, cat1, cat2) {
  let result;

  let cat1Distance = linearDistance(cat1, mouse); // armazena a distância entre cat1 e mouse
  let cat2Distance = linearDistance(cat2, mouse); // armazena a distância entre cat2 e mouse

  if (cat1Distance < cat2Distance) { // se cat1 está mais perto de mouse que cat2
    result = 'cat1'; // 'cat1' é armazenada como resultado.
  } else if (cat2Distance < cat1Distance) { // se cat2 está mais perto de mouse que cat1
    result = 'cat2'; // 'cat2' é armazenada como resultado.
  } else { // senão cat1 e cat2 estão a mesma distância de mouse
    result = 'os gatos trombam e o rato foge'; // 'os gatos trombam e o rato foge' é armazenada como resultado
  }

  return result; // retorna o resultado encontrado
}

// console.log(`catAndMouse(0, 3, 2) = ${catAndMouse(0, 3, 2)}`);

// console.log(`catAndMouse(0, 6, 12) = ${catAndMouse(0, 6, 12)}`);

// console.log(`catAndMouse(0, 15, 15) = ${catAndMouse(0, 15, 15)}`);

// console.log(`catAndMouse(0, -3, -2) = ${catAndMouse(0, -3, -2)}`);

// console.log(`catAndMouse(0, -6, -12) = ${catAndMouse(0, -6, -12)}`);

// console.log(`catAndMouse(0, -15, -15) = ${catAndMouse(0, -15, -15)}`);

// console.log(`catAndMouse(0, -3, 2) = ${catAndMouse(0, -3, 2)}`);

// console.log(`catAndMouse(0, -6, 12) = ${catAndMouse(0, -6, 12)}`);

// console.log(`catAndMouse(0, -15, 15) = ${catAndMouse(0, -15, 15)}`);

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
