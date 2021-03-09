// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}
console.log(compareTrue(false, true));
// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui

  return frase.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(string) {
  // seu código aqui
  let ultimoItem = string[string.length - 1];
  let primeiroItem = string[0];
  let result = ultimoItem + ', ' + primeiroItem;
  return result;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

//Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3;
  let empates = ties;
  return vitoria + empates;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = 0;
  let contador = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maior === array[index]) {
      contador += 1;
    }
  }

  return contador;
}
console.log(highestCount([0, 0, 0]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqu
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}
console.log(fizzBuzz([7, 9]));
// Desafio 9
function encode(phrase) {
  // seu código aqui
  let newPhrase = phrase
    .replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return newPhrase;
}

function decode(phraseDecode) {
  // seu código aqui
  let decod = phraseDecode
    .replace(/1/gi, 'a')
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
