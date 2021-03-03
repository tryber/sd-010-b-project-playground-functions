// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');// separo as strings pelo espaõ em branco
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  return `${ultimoItem}, ${primeiroItem}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let total = wins + ties;
  return total;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorValor = 0;
  let aparicoes = 0;
  for (let index = 0; index < array.length; index += 1) { // primeiro encontro o maior valor
    if (maiorValor < array[index]) {
      maiorValor = array[index];
    }
  }
  for (let a = 0; a < array.length; a += 1) {
    if (maiorValor === array[a]) {
      aparicoes += 1;
    }
  }
  return aparicoes;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 -= mouse;
  cat2 -= mouse;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  if (cat2 < cat1) {
    return 'cat2';
  } else if (cat2 > cat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 2, 2));

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      resultado.push('bug!');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('buzz');
    }
  }
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  string = string.split('');
  let palavraCodificada = '';
  for (let letra = 0; letra < string.length; letra += 1) {
    if (string[letra] === 'a') {
      palavraCodificada += 1;
    } else if (string[letra] === 'e') {
      palavraCodificada += 2;
    } else if (string[letra] === 'i') {
      palavraCodificada += 3;
    } else if (string[letra] === 'o') {
      palavraCodificada += 4;
    } else if (string[letra] === 'u') {
      palavraCodificada += 5;
    } else {
      palavraCodificada += string[letra];
    }
  }
  return palavraCodificada;
}
console.log(encode('hi there!'));

function decode(string) {
  string = string.split('');
  let palavraDecodificada = '';
  for (let letra = 0; letra < string.length; letra += 1) {
    if (string[letra] === '1') {
      palavraDecodificada += 'a';
    } else if (string[letra] === '2') {
      palavraDecodificada += 'e';
    } else if (string[letra] === '3') {
      palavraDecodificada += 'i';
    } else if (string[letra] === '4') {
      palavraDecodificada += 'o';
    } else if (string[letra] === '5') {
      palavraDecodificada += 'u';
    } else {
      palavraDecodificada += string[letra];
    }
  }
  return palavraDecodificada;
}
console.log(decode('h3 th2r2!'));

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
