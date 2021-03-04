// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 == true && valor2 == true) {

    return true;

  } else if (valor1 == false && valor2 == false) {

    return false;
  } else {

    return false;

  }
}
//console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  areaTriangulo = (base * heigth) / 2;

  return areaTriangulo;

}
//console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let recebeString = frase.split(' ');

  return recebeString;

}
//console.log(splitSentence('foguete'));

// Desafio 4
function concatName(fraseArray) {
  // seu código aqui
  let novoFormato = fraseArray[fraseArray.length - 1] + ", " + fraseArray[0];

  return novoFormato

}
//let arrayDeStrings = ['captain', 'my', 'captain'];
//console.log(concatName(arrayDeStrings));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}
//console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let localizaMaior = 0;
  let contMaior = 0;
  for (let localiza in arrayNumeros) {
    if (localizaMaior < arrayNumeros[localiza]) {
      localizaMaior = arrayNumeros[localiza];
    }
  }

  for (let contador in arrayNumeros) {
    if (localizaMaior == arrayNumeros[contador]) {
      contMaior++;
    }
  }
  return contMaior;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);

  if (distanciaGato1 < distanciaGato2) {

    return 'cat1';

  } else if (distanciaGato1 > distanciaGato2) {

    return 'cat2';

  } else {

    return 'os gatos trombam e o rato foge';

  }

}
//console.log(catAndMouse(0, 3, 2));

// Desafio 8
function fizzBuzz(arrayInicial) {
  // seu código aqui
  let arrayFinal = [];

  for (const i in arrayInicial) {

    if (arrayInicial[i] % 3 == 0 && arrayInicial[i] % 5 == 0) {

      arrayFinal.push('fizzBuzz');

    } else if (arrayInicial[i] % 3 == 0) {

      arrayFinal.push('fizz');

    } else if (arrayInicial[i] % 5 == 0) {

      arrayFinal.push('buzz');

    } else {
      arrayFinal.push('bug!')
    }

  }
  return arrayFinal;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));
//console.log(fizzBuzz([7, 9]));
//console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(stringEncode) {
  // seu código aqui
  let novaString = stringEncode;

  for (i = 0; i <= novaString.length; i++) {

    if (novaString[i] === 'a') {
      novaString = novaString.replace('a', '1');

    } else if (novaString[i] === 'e') {

      novaString = novaString.replace('e', '2');

    } else if (novaString[i] === 'i') {

      novaString = novaString.replace('i', '3');

    } else if (novaString[i] === 'o') {

      novaString = novaString.replace('o', '4');

    } else if (novaString[i] === 'u') {
      novaString = novaString.replace('u', '5');
    }
  }

  return novaString;

}
//console.log(encode('hello'));

function decode(stringDecode) {
  // seu código aqui
  let novaString = stringDecode;

  for (i = 0; i <= novaString.length; i++) {

    if (novaString[i] === '1') {
      novaString = novaString.replace('1', 'a');

    } else if (novaString[i] === '2') {

      novaString = novaString.replace('2', 'e');

    } else if (novaString[i] === '3') {

      novaString = novaString.replace('3', 'i');

    } else if (novaString[i] === '4') {

      novaString = novaString.replace('4', 'o');

    } else if (novaString[i] === '5') {
      novaString = novaString.replace('5', 'u');
    }
  }
  return novaString;
}
//console.log(decode('h2ll4'));

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
