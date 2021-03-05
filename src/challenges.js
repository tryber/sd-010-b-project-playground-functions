// Desafio 1
function compareTrue(valor1, valor2) {
  let retorno = Boolean;
  if (valor1 === true && valor2 === true) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}
// console.log(compareTrue(true,true));
// Desafio 2
function calcArea(base, altura) {
  let calcArea = (base * altura) / 2;
  return calcArea;  
}
// Desafio 3
function splitSentence(myString) { // (Referencias sobre splits nesse site): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split;
  let splits = myString.split(' ');
  return splits;
}
// Desafio 4
function concatName(lassFirstArray) {
  return lassFirstArray[lassFirstArray.length -1] + ', ' + lassFirstArray[0];
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties;
  return points;
}
// Desafio 6
function highestCount(numbersArray) {
  let maiorArray = 0;
  let calcRep = 0;
  for (let index = 0; index < numbersArray.length; index += 1 ) {
    if (numbersArray[index] > maiorArray) {
      maiorArray = numbersArray[index];
    }
  }
  for (let index2 = 0; index2 < numbersArray.length; index2 += 1) {
    if (numbersArray[index2] === maiorArray) {
      calcRep += 1;
    }
  }
  return calcRep;
}
// Desafio 7
// (Pesquisei sobre a função Math.abs, para entender sobre como ela transforma um numero)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let retorno = '';
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    retorno = 'os gatos trombam e o rato foge';    
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    retorno = 'cat1';
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    retorno = 'cat2';
  }
  return retorno
}
// console.log( catAndMouse ( 0 , 3 , 2 ) ) ;
// Desafio 8
function fizzBuzz(numArray) {
  let resul = [];
  for (let index = 0; index < numArray.length; index += 1) {
    if ((numArray[index] % 3 === 0) && (numArray[index] % 5 === 0)) {
      resul.push('fizzBuzz');
    } else if (numArray[index] % 5 === 0) {
      resul.push('buzz');
    } else if (numArray[index] % 3 === 0) {
      resul.push('fizz');
    } else {
      resul.push('bug!');
    }
  }  
  return resul;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45, 45, 15, 2]));
// Desafio 9
function encode(vowel) { // (Apredi como usar funcão replace) https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  return vowel.replace(/a/g, '1')
    .replace(/e/g, '2') //  https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}
// console.log(encode("he there"));
function decode(numberVowel) {
  return numberVowel.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
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
