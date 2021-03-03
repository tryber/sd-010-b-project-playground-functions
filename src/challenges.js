// Desafio 1
function compareTrue(boola, boolb) {
  return ((boola === true) && (boolb === true));
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;

  return area;
}

// Desafio 3
function splitSentence(frase) {
  let separado = frase.split(' ');
  return separado;
}

// Desafio 4
function concatName(arrayDePalavras) {
  let resposta = `${arrayDePalavras[arrayDePalavras.length - 1]}, ${arrayDePalavras[0]}`;
  return resposta;
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadePontos = wins * 3 + ties;
  return quantidadePontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let contagem = { };
  let maiorNumero = 0;
  for (let itens of arrayDeNumeros) {
    contagem[itens] = 0;
  }
  for (let itens of arrayDeNumeros) {
    contagem[itens] += 1;
  }
  for (let itens of arrayDeNumeros) {
    if (itens > maiorNumero) {
      maiorNumero = itens;
    }
  }
  return contagem[maiorNumero];
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
function verificaFalse(tres, cinco) {
  let resposta = '';
  if (tres === false && cinco === false) {
    resposta += 'bug!';
    if (tres === true && cinco === true) {
      resposta += 'fizzBuzz';
    }
  }
  return resposta;
}
function verificaFizzBuzz(palavra) {
  let saida = '';
  if (palavra === 'fizzbuzz') {
    saida = 'fizzBuzz';
  } else {
    saida = palavra;
  }
  return saida;
}
function criarArray(arrayDeNumeros) {
  let saida = [];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    saida[index] = '';
  }
  return saida;
}
function fizzBuzz(arrayDeNumeros) {
  let resposta = criarArray(arrayDeNumeros);
  let tres = false;
  let cinco = false;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    tres = false;
    cinco = false;
    if (arrayDeNumeros[index] % 3 === 0) {
      resposta[index] += 'fizz';
      tres = true;
    }
    if (arrayDeNumeros[index] % 5 === 0) {
      resposta[index] += 'buzz';
      cinco = true;
    }
    resposta[index] += verificaFalse(tres, cinco);
    resposta[index] = verificaFizzBuzz(resposta[index]);
  }
  return resposta;
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
