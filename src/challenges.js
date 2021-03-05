// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  return num1 && num2;
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let stringResult = arr[arr.length - 1] + ', ' + arr[0];
  return stringResult;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let calcWins = wins * 3;
  let calcTies = ties * 1;
  let pontuationTotal = calcWins + calcTies;
  return pontuationTotal;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let highNumber = Math.max.apply(Math, arr);
  let totalHigh = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === highNumber) {
      totalHigh += 1;
    }
  }
  return totalHigh;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrNumber) {
  let resultArr = [];
  for (let index = 0; index < arrNumber.length; index += 1) {
    switch (true) {
    case (arrNumber[index] % 5 === 0 && arrNumber[index] % 3 === 0):
      resultArr.push('fizzBuzz');
      break;
    case (arrNumber[index] % 3 === 0):
      resultArr.push('fizz');
      break;
    case (arrNumber[index] % 5 === 0):
      resultArr.push('buzz');
      break;
    default:
      resultArr.push('bug!');
      break;
    }
  }
  return resultArr;
}

// Desafio 9
function encode(str) {
  // seu código aqui
 let vowel = ['a', 'e', 'i', 'o', 'u'];
 let number = [1, 2, 3, 4, 5];
 let result = str.split('');
 let totalResult;
 for (let key in result){
   for (let key2 in vowel){
     if (result[key] === vowel[key2]) {
       result[key] = number[key2];
     }
   }
 }
 totalResult = result.join('');
 return totalResult;
}

function decode(strD) {
  // seu código aqui
  let change = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let arrayDecodificador = strD.split('');
  arrayDecodificador.forEach((e, index) => {
    for (let key in change) {
      if (parseInt(e, 10) == change[key]) {
        arrayDecodificador[index] = key;
      }
    }
  });
  return arrayDecodificador.join('');
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
