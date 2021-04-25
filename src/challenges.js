// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(texto) {
  let result = texto.split(' ');
  return result;
}
console.log(splitSentence('Lara Capila'));

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  return `${ultimo}, ${primeiro}`;
}
console.log(concatName(['Lara', 'Karoline', 'De', 'Oliveira', 'Capila']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let resultado = vitorias + empates;
  return resultado;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let maxNumber = Math.max(...numbers);
  let cont = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maxNumber) {
      cont += 1;
    }
  }
  return cont;
}
console.log(highestCount([0, 4, 4, 4, 2, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let catName = '';
  if (distCat1 < distCat2) {
    catName = 'cat1';
  } else if (distCat2 < distCat1) {
    catName = 'cat2';
  } else {
    catName = 'os gatos trombam e o rato foge';
  }
  return catName;
}
console.log(catAndMouse(2, 5, 7));
// Desafio 8
// function fizzBuzz(array) {
//   let arrayReturn = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] % 3 === 0 && array[index] % 5 === 0) {
//       arrayReturn[index] = 'fizzBuzz';
//     } else if (array[index] % 3 === 0) {
//       arrayReturn[index] = 'fizz';
//     } else if (array[index] % 5 === 0) {
//       arrayReturn[index] = 'buzz';
//     } else {
//       arrayReturn[index] = 'bug!';
//     }
//   }
//   return arrayReturn;
// }
// console.log(fizzBuzz([7, 9]));

// Desafio 9
// const encode = (string) => {
//   const arrayText = string.split('');
//   const objEncode = { a: 1, e: 2, i: 3, o: 4, u: 5 };
//   for (let i = 0; i < arrayText.length; i += 1) {
//     for (let key in objEncode) {
//       if (arrayText[i] === key) {
//         arrayText[i] = objEncode[key];
//       }
//     }
//   }
//   const textSplit = arrayText.join('');
//   return textSplit;
// };
// console.log(encode('Hi there'));

// const decode = (string) => {
//   const arrayText = string.split('');
//   const objEncode = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
//   for (let i = 0; i < arrayText.length; i += 1) {
//     for (let key in objEncode) {
//       if (arrayText[i] === key) {
//         arrayText[i] = objEncode[key];
//       }
//     }
//   }
//   const textSplit = arrayText.join('');
//   return textSplit;
// };
// console.log(decode('H3 th2r2'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  // decode,
  // encode,
  // fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
