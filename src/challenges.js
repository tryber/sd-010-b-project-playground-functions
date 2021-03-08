// Desafio 1
function compareTrue(numeroImpar1, numeroImpar2) {
  let confirmacao = false;
  if (numeroImpar1 % 2 !== 0 && numeroImpar2 % 2 !== 0) {
    confirmacao = true;
  }
  return confirmacao;
}
// Desafio 2
function calcArea(base, height) {
  let triangulo = 0;
  triangulo = ((base * height) / 2);
  return triangulo;
}
// Desafio 3
function splitSentence(frase) {
  let array = [];
  array = frase.split(' ');
  return array;
}
// Desafio 4
function concatName(variavel) {
  let resultado = '';
  resultado = variavel[variavel.length - 1] + ', ' + variavel[0];
  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = (3 * wins + 1 * ties);
  return pontos;
}
// Desafio 6
function highestCount(n) {
  let numeroMaior = 0;
  let contador = 0;
  for (let i = 0; i < n.length; i += 1) {
    if (n[i] >= numeroMaior) {
      numeroMaior = n[i];
    }
  }
  for (let i = 0; i < n.length; i += 1) {
    if (numeroMaior === n[i]) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = Math.abs(cat1 - mouse);
  let position2 = Math.abs(cat2 - mouse);
  let resultado = '';
  if (position1 === position2) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (position1 > position2) {
    resultado = 'cat2';
  } else {
    resultado = 'cat1';
  }
  return resultado;
}
// Desafio 8
function fizzBuzz(n) {
  let resultado = [];
  for (let i = 0; i < n.length; i += 1) {
    if (n[i] % 5 === 0 && n[i] % 3 === 0) {
      resultado.push('fizzBuzz');
    } else if (n[i] % 5 === 0 && n[i] % 3 !== 0) {
      resultado.push('buzz');
    } else if (n[i] % 3 === 0 && n[i] % 5 !== 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
// Desafio 9
function encode(string) {
  let palavra = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      palavra += '1';
    } else if (string[i] === 'e') {
      palavra += '2';
    } else if (string[i] === 'i') {
      palavra += '3';
    } else if (string[i] === 'o') {
      palavra += '4';
    } else if (string[i] === 'u') {
      palavra += '5';
    } else {
      palavra += string[i];
        }
  }
  return palavra;
}

function decode(string) {
  let palavra = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      palavra += 'a';
    } else if (string[i] === '2') {
      palavra += 'e';
    } else if (string[i] === '3') {
      palavra += 'i';
    } else if (string[i] === '4') {
      palavra += 'o';
    } else if (string[i] === '5') {
      palavra += 'u';
    } else {
      palavra += string[i];
    }
  }
  return palavra;
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
