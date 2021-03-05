// Desafio 1
function compareTrue(bool1, bool2) {
  let resultado = '';
  if (bool1 && bool2 === true) {
    resultado = true;
  } else if (bool1 && bool2 === false) {
    resultado = false;
  } else {
    resultado = false;
  }
  return resultado;
}
// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}
// console.log(calcArea(51, 1));
// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}
// console.log(splitSentence('foguete'));

// Desafio 4
// const array = ['captain', 'my', 'captain'];

function concatName(array) {
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}
// console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}
// console.log(footballPoints(0, 0));

// Desafio 6
// const array = [0, 0, 0];

function highestCount(array) {
  let numeroOrdenado = array.sort();
  let total = 1;
  for (let index in numeroOrdenado) {
    if (numeroOrdenado[index] === numeroOrdenado[index - 1]) {
      total += 1;
    } else {
      total = 1;
    }
  }

  return total;
}
// console.log(highestCount(array));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ataqueBemSucedido = '';
  let ataqueGato1 = 0;
  let ataqueGato2 = 0;
  if (mouse > cat1) {
    for (let gato1 = cat1; gato1 !== mouse; gato1 += 1) {
      ataqueGato1 += 1;
    }
  } else {
    for (let gato1 = cat1; gato1 !== mouse; gato1 -= 1) {
      ataqueGato1 += 1;
    }
  }
  if (mouse > cat2) {
    for (let gato2 = cat2; gato2 !== mouse; gato2 += 1) {
      ataqueGato2 += 1;
    }
  } else {
    for (let gato2 = cat2; gato2 !== mouse; gato2 -= 1) {
      ataqueGato2 += 1;
    }
  } // o post do Renan Atunes que me deu uma luz nesses if's acima
  if (ataqueGato1 < ataqueGato2) {
    ataqueBemSucedido = 'cat1';
  } else if (ataqueGato1 > ataqueGato2) {
    ataqueBemSucedido = 'cat2';
  } else {
    ataqueBemSucedido = 'os gatos trombam e o rato foge';
  }
  return ataqueBemSucedido;
}
// console.log(catAndMouse(30, 20, 20));

// Desafio 8
// const array = [2, 15, 7, 9, 45];

function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
// console.log(fizzBuzz(array));
// Desafio 9
// let string = 'h3 th2r2!';

function encode(string) {
  let palavraFatiada = string.split('');
  for (let index = 0; index < palavraFatiada.length; index += 1) {
    switch (true) {
      case palavraFatiada[index] === 'a':
        palavraFatiada[index] = 1;
        break;
      case palavraFatiada[index] === 'e':
        palavraFatiada[index] = 2;
        break;
      case palavraFatiada[index] === 'i':
        palavraFatiada[index] = 3;
        break;
      case palavraFatiada[index] === 'o':
        palavraFatiada[index] = 4;
        break;
      case palavraFatiada[index] === 'u':
        palavraFatiada[index] = 5;
        break;
      default:
        break;
    }
  }
  let resultado = palavraFatiada.join('');
  return resultado;
}

function decode(string) {
  let palavraFatiada = string.split('');
  for (let index = 0; index < palavraFatiada.length; index += 1) {
    switch (true) {
      case palavraFatiada[index] === '1':
        palavraFatiada[index] = 'a';
        break;
      case palavraFatiada[index] === '2':
        palavraFatiada[index] = 'e';
        break;
      case palavraFatiada[index] === '3':
        palavraFatiada[index] = 'i';
        break;
      case palavraFatiada[index] === '4':
        palavraFatiada[index] = 'o';
        break;
      case palavraFatiada[index] === '5':
        palavraFatiada[index] = 'u';
        break;
      default:
        break;
    }
  }
  let resultado = palavraFatiada.join('');
  return resultado;
}
// console.log(decode(string));

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
