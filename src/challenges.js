// Desafio 1
function compareTrue(a, b) {
  let confirma = false;
  return a === true && b === true ? !confirma : confirma;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(a) {
  let dado = a.split(' ');
  return dado;
}

// Desafio 4
function concatName(a) {
  let dado = [];
  dado.push(a.pop());
  dado.push(a[0]);
  dado = dado.join(', ');
  return dado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * 3;
  return a + ties;
}

// Desafio 6
function highestCount(a) {
  let maior = Math.max.apply(null, a);
  let count = 0;
  let idx = a.indexOf(maior);
  while (idx !== -1) {
    count += 1;
    idx = a.indexOf(maior, idx + 1);
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let alcancaPrimeiro = '';

  if (distCat1 < distCat2) {
    alcancaPrimeiro = 'cat1';
  }
  if (distCat2 < distCat1) {
    alcancaPrimeiro = 'cat2';
  }
  if (distCat1 === distCat2) {
    alcancaPrimeiro = 'os gatos trombam e o rato foge';
  }
  return alcancaPrimeiro;
}

// Desafio 8
function fizzBuzz(a) {
  let dado = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 15 === 0) {
      dado.push('fizzBuzz');
    } else if (a[i] % 3 === 0) {
      dado.push('fizz');
    } else if (a[i] % 5 === 0) {
      dado.push('buzz');
    } else {
      dado.push('bug!');
    }
  }
  return dado;
}

// Desafio 9
function encode(frase) {
  let separado = frase.split('');
  for (let caracter in separado) {
    if ({}.hasOwnProperty.call(separado, caracter)) {
      if (separado[caracter] === 'a') {
        separado[caracter] = 1;
      } if (separado[caracter] === 'e') {
        separado[caracter] = 2;
      } if (separado[caracter] === 'i') {
        separado[caracter] = 3;
      } if (separado[caracter] === 'o') {
        separado[caracter] = 4;
      } if (separado[caracter] === 'u') {
        separado[caracter] = 5;
      }
    }
  }
  let juntoEncode = separado.join('');
  return juntoEncode;
}
function decode(frase) {
  let separado = frase.split('');
  for (let caracter in separado) {
    if ({}.hasOwnProperty.call(separado, caracter)) {
      if (separado[caracter] === '1') {
        separado[caracter] = 'a';
      } if (separado[caracter] === '2') {
        separado[caracter] = 'e';
      } if (separado[caracter] === '3') {
        separado[caracter] = 'i';
      } if (separado[caracter] === '4') {
        separado[caracter] = 'o';
      } if (separado[caracter] === '5') {
        separado[caracter] = 'u';
      }
    }  
  }
  let juntoDecode = separado.join('');
  return juntoDecode;
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
