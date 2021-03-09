// Desafio 1
/*
   Essa função recebe dois booleano e retorna true se ambos os valores booleanos são verdadeiros e falso, caso contrário.
  */
function compareTrue(booleano1, booleano2) {
  return booleano1 && booleano2;
}

// Desafio 2
/*
  Essa função recebe dois valores numéricos, a base e altura de um triangulo, calcula e retorna a area deste triangulo.
 */
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
/*
   Essa função recebe uma string e retorna um array de strings separadas por cada espaço na string original.
  */
function splitSentence(sentence) {
  let result = []; // inicializa result com array vazio
  let word = ''; // inicializa word com string vazia

  // percorre cada caracter de sentence
  for (const character of sentence) {
    // constrói palavra: armazena em word se caracter diferente de espaço
    if (character !== ' ') {
      word += character; // concatena o caracter na string word
    } else { // fim da construção da palavra
      result.push(word); // armazena word no array result
      word = ''; // reinicializa word com string vazia
    }
  }
  result.push(word); // armazena a última word construída no array result
  return result;
}

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
/*
  Essa função calcula a quantidade de pontos que um time marcou em um campeonato. Para isso, recebe o número de vitórias (wins) e de empates (ties), calcula e retorna a quantidade de pontos marcados sendo que cada vitória vale 3 pontos e cada empate, 1 ponto.
 */
function footballPoints(wins, ties) {
  let winsPoints = wins * 3; // calcula a quantidade de pontos marcados com vitórias
  let tiesPoints = ties * 1; // calcula a quantidade de pontos marcados com empates
  let totalPoints = winsPoints + tiesPoints; // calcula a quantidade total de pontos marcados
  return totalPoints;
}

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
    // 'os gatos trombam e o rato foge' é armazenada como resultado
    result = 'os gatos trombam e o rato foge';
  }

  return result; // retorna o resultado encontrado
}

// Desafio 8
/*
  Essa função recebe um número e retorna uma string, sendo que o número será avaliado da seguinte forma: se divisível apenas por 3, retorne uma string "fizz"; se divisível apenas por 5, retorne uma string "buzz"; se divisível por 3 e 5, retorne a string "fizzBuzz"; caso contrário, retorne a string "bug!".
 */
function fizzBuzzString(number) {
  let result = ''; // inicializa a string de resultado

  if ((number % 15) === 0) { // se número divisível por 3 e 5, isto é, 15
    result += 'fizzBuzz'; // armazena a string "fizzBuzz" em result
  } else if ((number % 3) === 0) { // se número divisível por 3
    result += 'fizz'; // armazena a string "fizz" em result
  } else if ((number % 5) === 0) { // se número divisível por 5
    result += 'buzz'; // armazena a string "buzz" em result
  } else { // se número não é divisível nem por 3 e nem 5
    result += 'bug!'; // armazena a string "bug" em result
  }

  return result; // retorna a string de resultado
}

/*
  Essa função recebe um array de números e retorna um array de strings, sendo que cada número do array será avaliado e o resultado armazenado no array de strings, na mesma posição original. Cada número será avaliado da seguinte forma: se divisível apenas por 3, retorne uma string "fizz"; se divisível apenas por 5, retorne uma string "buzz"; se divisível por 3 e 5, retorne a string "fizzBuzz"; caso contrário, retorne a string "bug!";

  Foi utilizado o loop for...of para obter diretamente o valor de cada posição e como ele não será modificado dentro do loop, a variavel number foi declarada como const.
 */
function fizzBuzz(numbersArray) {
  let stringsArray = [];

  for (const number of numbersArray) {
    stringsArray.push(fizzBuzzString(number));
  }
  return stringsArray; // retorna o array de strings
}

// Desafio 9
/*
  Essa função recebe um caracter e caso seja uma vogal minúscula, será trocada por número da seguinte forma: a -> 1; e -> 2; i -> 3; o -> 4; u -> 5

  Material consultado sobre como descobrir se uma chave (propriedade) existe em um objeto
  https://stackoverflow.com/a/22074727
 */
function charEncode(character) {
  // define um objeto code contendo as vogais como propriedades (chaves) e os números da troca como valores destas propriedades
  let code = { a: '1', e: '2', i: '3', o: '4', u: '5' };

  let encodedChar; // encodedChar armazenará o resultado da troca

  // se character não for uma vogal minúscula então não haverá valor definido para esta propriedade em code
  if (code[character] === undefined) {
    encodedChar = character; // o caracter será mantido
  } else { // caso contrário
    encodedChar = code[character]; // a vogal minúscula será trocada por seu respectivo valor em code
  }

  return encodedChar; // retorna o caracter codificado
}

/*
  Essa função recebe uma string e retorna uma string com todas as vogais minúsculas trocadas por números da seguinte forma: a -> 1; e -> 2; i -> 3; o -> 4; u -> 5
 */
function encode(string) {
  let encodedString = ''; // inicializa a string codificada com ''

  for (const character of string) { // para cada caracter em string
    encodedString += charEncode(character); // concatena o caracter codificado em encodedString
  }

  return encodedString; // retorna a string codificada
}

/*
  Essa função recebe um caracter e caso seja um número, será trocado por uma vogal minúscula da seguinte forma: 1 -> a; 2 -> e; 3 -> i; 4 -> o; 5 -> u
 */
function charDecode(character) {
  // define um objeto code contendo as vogais como propriedades (chaves) e os números da troca como valores destas propriedades
  let code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  let decodedChar; // decodedChar armazenará o resultado da troca

  // se character não for um número então não haverá valor definido para esta propriedade em code
  if (code[character] === undefined) {
    decodedChar = character; // o caracter será mantido
  } else { // caso contrário
    decodedChar = code[character]; // o número será trocado por seu respectivo valor em code
  }

  return decodedChar; // retorna o caracter codificado
}

/*
  Essa função recebe uma string e retorna uma string com todos os números trocados por vogais minúsculas da seguinte forma: a -> 1; e -> 2; i -> 3; o -> 4; u -> 5
 */
function decode(string) {
  let decodedString = ''; // inicializa a string codificada com ''

  for (const character of string) { // para cada caracter em string
    decodedString += charDecode(character); // concatena o caracter decodificado em decodedString
  }

  return decodedString; // retorna a string codificada
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
