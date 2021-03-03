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
  // seu código aqui
  let resultArr = [];
  for (let index = 0; index < arrNumber.length; index += 1) {
    if (arrNumber[index] % 5 === 0 && arrNumber[index] % 3 === 0) {
      resultArr.push('fizzbuzz');
    } else if (arrNumber[index] % 3 === 0) {
      resultArr.push('fizz');
    } else if (arrNumber[index] % 5 === 0) {
      resultArr.push('buzz');
    } else {
      resultArr.push('bug!');
    }
  }   
  return resultArr;
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
