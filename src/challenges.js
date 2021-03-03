/* eslint-disable no-plusplus */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let novaFrase = frase.split(' ');
  return novaFrase;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui

  let primeiroTermo = arrayStrings[0];
  let novoArray = arrayStrings.reverse();
  let ultimoTermo = novoArray[0];

  return `${ultimoTermo}, ${primeiroTermo}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosTotais = (wins * 3) + (ties * 1);

  return pontosTotais;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorNumero = 0;
  let repeticao = 0;

  // eslint-disable-next-line no-plusplus
  for (let indice = 0; indice < arrayNumeros.length; indice++) {
    if (arrayNumeros[indice] > maiorNumero) {
      maiorNumero = arrayNumeros[indice];
    }
  }

  for (let indice = 0; indice < arrayNumeros.length; indice++) {
    if (arrayNumeros[indice] === maiorNumero) {
      repeticao++;
    }
  }

  return repeticao;
}

// Desafio 7
// eslint-disable-next-line max-lines-per-function
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let mouseCat1 = 0;
  let mouseCat2 = 0;

  if (mouse > cat1) {
    mouseCat1 = mouse - cat1;
  } else {
    mouseCat1 = cat1 - mouse;
  }

  if (mouse > cat2) {
    mouseCat2 = mouse - cat2;
  } else {
    mouseCat2 = cat2 - mouse;
  }

  if (mouseCat1 < mouseCat2) {
    return 'cat1';
  } if (mouseCat2 < mouseCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumerico) {
  // seu código aqui
  let arrayFizzBuzz = [];

  for (let key in arrayNumerico){
    if ((arrayNumerico[key] % 3 === 0) && (arrayNumerico[key] % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNumerico[key] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNumerico[key] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }

  return arrayFizzBuzz;
}

// Desafio 9
function encode(codificar) {
  // seu código aqui
  let arrayVogal = ['a', 'e', 'i', 'o', 'u'];
  let arrayCode = [1, 2, 3, 4, 5];

  let arrayCodificar = codificar.split('');

  for (let key in arrayCodificar) {
    for (let key2 in arrayVogal) {
      if (arrayCodificar[key] == arrayVogal[key2]){
        arrayCodificar[key] = arrayCode[key2];
      }
    }
  }

  let juntar = arrayCodificar.join('');

  return juntar;
}

function decode(decodificar) {
  // seu código aqui
  let arrayVogal = ['a', 'e', 'i', 'o', 'u'];
  let arrayCode = [1, 2, 3, 4, 5];

  let arrayDecodificar = decodificar.split('');

  for (let key in arrayDecodificar) {
    for (let key2 in arrayCode) {
      if (arrayDecodificar[key] == arrayCode[key2]){
        arrayDecodificar[key] = arrayVogal[key2];
      }
    }
  }

  let juntar = arrayDecodificar.join('');

  return juntar;
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
