// Desafio 1
function compareTrue(firstCondition, secondCondition) {
  // seu código aqui
  if (firstCondition === true && secondCondition === true) {
    return true;
  }
  return false;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(compareTrue(1 + 2 === 3, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  const separaFrase = frase.split(' ');

  // Usando a função sting split (que aprendi usando o site: https://www.w3schools.com/jsref/jsref_split.asp):
  return separaFrase;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(splitSentence("Eu sou um teste"));

// Desafio 4
function concatName(arrayDeStrings) {
  // seu código aqui

  // Somente para finalidade de teste:
  // arrayDeStrings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

  let first = [];
  first.push(arrayDeStrings[0]);

  let last = [];
  last.push(arrayDeStrings[arrayDeStrings.length - 1]);

  let stringDoMeio = ', ';

  const arrayFinal = last + stringDoMeio + first;
  return arrayFinal;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(concatName());

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const pontos = {
    eachWin: 3,
    eachTie: 1,
  };

  const points = ((wins * pontos.eachWin) + (ties * pontos.eachTie));
  return points;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let armazenaMaiorNumero = 0;
  let contador = 0;

  // Loop form 1 serve para achar qual é o maior número e Loop for 2 serve para cverificar quantas vezes o maior número aparece no array:
  for (let indexMaior = 0; indexMaior < arrayNumeros.length; indexMaior += 1) {
    if (arrayNumeros[indexMaior] > armazenaMaiorNumero) {
      armazenaMaiorNumero = arrayNumeros[indexMaior];
    }
  }

  for (let indexContador = 0; indexContador < arrayNumeros.length; indexContador += 1) {
    if (arrayNumeros[indexContador] === armazenaMaiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(highestCount());

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  // Ao olhar o log do GitHub, tive de fazer uma pequena alteração no código e adicionar uma nova função que transforma os números negativos em positivos, assim, as distâncias podem ser comparadas em números positivos:
  function transformNumber() {
    if (distanciaCat1 < 0) distanciaCat1 *= -1;
    if (distanciaCat2 < 0) distanciaCat2 *= -1;
  }
  transformNumber();

  let message = '';
  // Agora já podem ser compararadas de forma clara as distâncias entre os gatos e o rato:
  if (distanciaCat1 < distanciaCat2) message = 'cat1';
  else if (distanciaCat1 > distanciaCat2) message = 'cat2';
  else if (distanciaCat1 === distanciaCat2) message = 'os gatos trombam e o rato foge';

  return message;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(catAndMouse(0, 2, -2));

// Desafio 8
function fizzBuzz(nums) {
  // seu código aqui
  // A array a seguir serve apenas para finalidade de teste do algoritmo:
  // nums = [9, 25];
  let saveArray = [];

  for (let achaFizzBuzz = 0; achaFizzBuzz < nums.length; achaFizzBuzz += 1) {
    if (nums[achaFizzBuzz] % 5 === 0 && nums[achaFizzBuzz] % 3 === 0) saveArray.push('fizzBuzz');
    else if (nums[achaFizzBuzz] % 3 === 0) saveArray.push('fizz');
    else if (nums[achaFizzBuzz] % 5 === 0) saveArray.push('buzz');
    else saveArray.push('bug!');
  }
  return saveArray;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(fizzBuzz());

// Desafio 9
function encode(uncodedString) {
  // seu código aqui
  let letrasCodificar = ['a', 'e', 'i', 'o', 'u'];
  let algoritmo = ['1', '2', '3', '4', '5'];
  let saveToCode = '';
  let saveCodedString = '';

  for (let indexCode = 0; indexCode < uncodedString.length; indexCode += 1) {
    saveToCode = uncodedString[indexCode];
    for (let indexCoding = 0; indexCoding < letrasCodificar.length; indexCoding += 1) {
      if (letrasCodificar[indexCoding] === saveToCode) saveToCode = algoritmo[indexCoding];
    }
    saveCodedString += saveToCode;
  }
  return saveCodedString;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(encode("hi there!"));

function decode(codedString) {
  // seu código aqui
  let leAlgoritmo = ['1', '2', '3', '4', '5'];
  let letrasToDecode = ['a', 'e', 'i', 'o', 'u'];
  let saveToDecode = '';
  let saveDecodedString = '';

  for (let indexDecode = 0; indexDecode < codedString.length; indexDecode += 1) {
    saveToDecode = codedString[indexDecode];
    for (let indexDecoding = 0; indexDecoding < leAlgoritmo.length; indexDecoding += 1) {
      if (leAlgoritmo[indexDecoding] === saveToDecode) saveToDecode = letrasToDecode[indexDecoding];
    }
    saveDecodedString += saveToDecode;
  }
  return saveDecodedString;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(decode("h3 th2r2!"));

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
