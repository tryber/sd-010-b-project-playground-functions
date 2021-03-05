// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(myStr) {
  // solução criada a partir do documento https://www.w3schools.com/jsref/jsref_split.asp
  let split = myStr.split(' ');
  return split;
}

// Desafio 4
function concatName(myArray) {
  // seu código aqui
  let ultimaPosicao = myArray.length - 1;
  let ultimoItem = myArray[ultimaPosicao];
  let primeiroItem = myArray[0];
  let resultado = `${ultimoItem}, ${primeiroItem}`;

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let scoreWins = wins * 3;
  let scoreTies = ties * 1;

  return scoreWins + scoreTies;
}

// Desafio 6
function highestCount(arrayCount) {
  // seu código aqui
  let countRepeat = 0;

  for (let index in arrayCount) {
    let verificaNumero = arrayCount[index];

    for (let index2 in arrayCount) {
      if (verificaNumero === arrayCount[index2]) {
        countRepeat++;
      }
    } break;
  }
  return countRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  let resultCat1 = Math.abs(distanceCat1);
  let resultCat2 = Math.abs(distanceCat2);

  if (resultCat1 < resultCat2) {
    return 'cat1';
  }
  if (resultCat1 > resultCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';  
}

// Desafio 8
// função para comparar cada numero da array recebida da função fizzBuzz
function valuerFizzBuzz(arrayNumber) {
  if (arrayNumber % 3 === 0 && arrayNumber % 5 === 0) {
    return 'fizzBuzz';
  }
  if (arrayNumber % 3 === 0) {
    return 'fizz';
  }
  if (arrayNumber % 5 === 0) {
    return 'buzz';
  } return 'bug!';
}

function fizzBuzz(arrayFB) {
  let newArray = [];
  // laço For para percorrer a array da função fizzBuz
  for (let index = 0; index < arrayFB.length; index += 1) {
    let arrayNumber = arrayFB[index]; // recebe os numeros da array da função fizzBuzz para fazer a comparação na função valuer(arrayNumber)
    let result = valuerFizzBuzz(arrayNumber); // chama a função para comparação e substituíção dos valores na array
    newArray.push(result);
  }
  return newArray;
}

// Desafio 9
function encode(phrase) {
  // código creiado com a ajuda do https://pt.coredump.biz/questions/20343776/javascript-multiple-replace-with-regex-that-avoids-html-tags
  let newPhrase = phrase.replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return newPhrase;
}
function decode(phraseDecode) {
  // seu código aqui
  let decod = phraseDecode.replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return decod;
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
