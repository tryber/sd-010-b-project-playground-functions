// Desafio 1
function compareTrue(a, b) {
// seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// console log
console.log(compareTrue(true, false));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// console log
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
let splitor = ' ';
let arrayString = [];
function splitSentence(frase) {
  // seu código aqui
  for (let index = 0; index < frase.length; index += 1) {
    arrayString = frase.split(splitor);
  }
  return arrayString;
}
//
console.log(splitSentence('foguete'));
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo tribo'));
console.log(splitSentence('O rato roeu a roupa do rei de Roma'));

// Desafio 4
let last;
function concatName(fullName) {
  // seu código aqui
  for (let index = 0; index < fullName.length; index += 1) {
    last = index;
  }
  return `${fullName[last]}, ${fullName[0]}`;
}
// console log
console.log(concatName(['Angelo', 'Gabriel', 'Pires', 'Bittencourt', 'Lordello']));
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}
// console log
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
console.log(footballPoints(7, 20));

// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  let maior = 0;
  let contador = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (maior === arrayNumber[index]) {
      contador += 1;
    } else if (maior < arrayNumber[index]) {
      maior = arrayNumber[index];
      contador = 1;
    }
  }
  return contador;
}
// console log
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
console.log(highestCount([1, 2, 2, 2, 2, 2, 2, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  if (distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge';
  } if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  }
  return 'cat2';
}
// console log
console.log(catAndMouse(10, 9, 3));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 6, 6));

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let retorno = [];
  for (let index = 0; index < arrayFizzBuzz.length; index += 1) {
    let div3 = arrayFizzBuzz[index] % 3;
    let div5 = arrayFizzBuzz[index] % 5;
    if (div3 === 0 && div5 === 0) {
      retorno.push('fizzBuzz');
    } else if (div3 === 0) {
      retorno.push('fizz');
    } else if (div5 === 0) {
      retorno.push('buzz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno;
}
// console log
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(arrayEncode) {
  // seu código aqui
  let fraseA = arrayEncode;
  let fraseE = fraseA;
  let fraseI = fraseE;
  let fraseO = fraseI;
  let fraseU = fraseO;
  let encoded;
  for (let index = 0; index < arrayEncode.length; index += 1) {
    if (arrayEncode[index] === 'a') {
      fraseA = arrayEncode.replace(/a/g, 1);
    } else if (fraseA[index] === 'e') {
      fraseE = fraseA.replace(/e/g, 2);
    } else if (fraseE[index] === 'i') {
      fraseI = fraseE.replace(/i/g, 3);
    } else if (fraseI[index] === 'o') {
      fraseO = fraseI.replace(/o/g, 4);
    } else if (fraseO[index] === 'u') {
      fraseU = fraseO.replace(/u/g, 5);
    }
    encoded = fraseU;
  }
  return encoded;
}
// console log
console.log(encode('urso chuva de gatinho malhado com olho verde e azul'));

function decode(arrayDecode) {
  // seu código aqui
  let num1 = arrayDecode;
  let num2 = num1;
  let num3 = num2;
  let num4 = num3;
  let num5 = num4;
  let decoded;
  for (let index = 0; index < arrayDecode.length; index += 1) {
    if (arrayDecode[index] === '1') {
      num1 = arrayDecode.replace(/1/g, 'a');
    } else if (num1[index] === '2') {
      num2 = num1.replace(/2/g, 'e');
    } else if (num2[index] === '3') {
      num3 = num2.replace(/3/g, 'i');
    } else if (num3[index] === '4') {
      num4 = num3.replace(/4/g, 'o');
    } else if (num4[index] === '5') {
      num5 = num4.replace(/5/g, 'u');
    }
    decoded = num5;
  }
  return decoded;
}
// console log
console.log(decode('5rs4 ch5v1 d2 g1t3nh4 m1lh1d4 c4m 4lh4 v2rd2 2 1z5l'));

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
