// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  // } else {
  //   return false;
  // }
}

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

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
