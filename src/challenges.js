// Desafio 1 Y
function compareTrue(boolean1, boolean2) {
  let bolfalse = false;
  if (boolean1 === true && boolean2 === true) {
    bolfalse = true;
  }
  return bolfalse;
}
console.log(compareTrue(true, false));

// Desafio 2 Y
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3 Y
function splitSentence(frase) {
  let palavras = frase.split(' ');
  return palavras;
}
// Desafio 4 Y
function concatName(array) {
  const concatenated = `${array[(array.length - 1)]}, ${array[0]}`;

  return concatenated;
}
// Desafio 5 Y
function footballPoints(wins, ties) {
  const totalpoints = (wins * 3) + ties;

  return totalpoints;
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

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumerico) {
  // seu código aqui
  let arrayFizzBuzz = [];

  for (let key in arrayNumerico) {
    if ((arrayNumerico[key] % 3 == 0) && (arrayNumerico[key] % 5 == 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNumerico[key] % 3 == 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNumerico[key] % 5 == 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }

  return arrayFizzBuzz;
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
