// OK - Desafio 1
function compareTrue(boolean1, boolean2) {
  // Ref: https://stackoverflow.com/questions/45817581/replace-this-if-then-else-statement-by-a-single-return-statement
  // Após sugestão do ESlint, usei a referência acima para refatoração do cógico, antes implementado com uso do IF/ELSE
  return boolean1 && boolean2;
}
console.log(compareTrue(false, false));

// OK - Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log(calcArea(51, 1));

// OK - Desafio 3
function splitSentence(sentence) {
  return (sentence.split(' '));
}
console.log(splitSentence('Go Trybe'));

// OK - Desafio 4
function concatName(stringsArray) {
  let ultimoePrimeiroItemString = (stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0]);
  return ultimoePrimeiroItemString;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// OK - Desafio 5
function footballPoints(wins, ties) {
  let earnedPoints = ((wins * 3) + (ties * 1));
  return earnedPoints;
}
console.log(footballPoints(0, 0));

// OK - Desafio 6
function highestCount(numbersArray) {
  // Para codificação desta função utilizei como referência a página https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let highestNumber = Math.max(...numbersArray);
  let occurrencesHighestNumber = 0;

  for (let key in numbersArray) {
    if (numbersArray[key] === highestNumber) {
      occurrencesHighestNumber += 1;
    }
  }
  return occurrencesHighestNumber;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Para codificação desta função utilizei como referência a página https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(14, 5, 12));

// Desafio 8
function fizzBuzz(numbersArray) {
  let newArray = [];

  for (let index in numbersArray) {
    if ((numbersArray[index] % 3 === 0) && (numbersArray[index] % 5 === 0)) {
      newArray.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  // Para codificação desta função utilizei como referência a página https://www.w3schools.com/js/js_switch.asp
  let encodeString = '';

  for (let index = 0; index < string.length; index += 1 ) {
    switch (string[index]) {
      case 'a':
        encodeString += '1';
        break;
      case 'e':
        encodeString += '2';
        /* console.log("case E: " + string[index]); */
        break;
      case 'i':
        encodeString += '3';
        break;
      case 'o':
        encodeString += '4';
        break;
      case 'u':
        encodeString += '5';
        break;
      default:
        encodeString += string[index];
        break;
    }
  }  
  return encodeString;
}
console.log(encode('hi there!'));

function decode(string) {
  let decodeString = '';

  for (let index = 0; index < string.length; index += 1 ) {
    switch (string[index]) {
      case '1':
        decodeString += 'a';
        break;
      case '2':
        decodeString += 'e';
        /* console.log("case E: " + string[index]); */
        break;
      case '3':
        decodeString += 'i';
        break;
      case '4':
        decodeString += 'o';
        break;
      case '5':
        decodeString += 'u';
        break;
      default:
        decodeString += string[index];
        break;
    }
  }  
  return decodeString;
}
console.log(decode('h3 th2r2!'));

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
