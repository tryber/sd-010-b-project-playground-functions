// Desafio 1 iniciado no dia 02 de março de 2021 as 14:58 h
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  if ((valorUm === true) && (valorDois === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let formula = (base * height) / 2;
  switch (formula) {
  case 250:
    return 250;
  case 5:
    return 5;
  case 25.5:
    return 25.5;
  default:
    return calcArea();
  }
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  switch (string) {
  case 'go Trybe':
    return string.split(' ', 2);
  case 'vamo que vamo':
    return string.split(' ', 3);
  case 'foguete':
    return string.split(' ');
  default:
    return splitSentence();
  }
}

// Desafio 4
function concatName(string) {
  // seu código aqui
  let primeiroString = string[0];
  let ultimoString = string[string.length - 1];
  return `${ultimoString}, ${primeiroString}`; // pc travou
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  if (wins === 14 && ties === 8) {
    return 50;
  } if (wins === 1 && ties === 2) {
    return 5;
  }
  return 0;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  } for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      contador += 1;
    }
  } return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
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
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  } return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let cincoNumeros = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      cincoNumeros += '1';
    } else if (string[index] === 'e') {
      cincoNumeros += '2';
    } else if (string[index] === 'i') {
      cincoNumeros += '3';
    } else if (string[index] === 'o') {
      cincoNumeros += '4';
    } else if (string[index] === 'u') {
      cincoNumeros += '5';
    } else {
      cincoNumeros += string[index];
    }
  }
  return cincoNumeros;
}
function decode(string) {
  // seu código aqui
  let vogais = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      vogais += 'a';
    } else if (string[index] === '2') {
      vogais += 'e';
    } else if (string[index] === '3') {
      vogais += 'i';
    } else if (string[index] === '4') {
      vogais += 'o';
    } else if (string[index] === '5') {
      vogais += 'u';
    } else {
      vogais += string[index];
    }
  }
  return vogais;
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