// Desafio 1
function compareTrue(a, b) {
  let require = false;

  if (a && b) {
    require = true;
  } else {
    require = false;
  }
  return require;
}

// Desafio 2
function calcArea(base, height) {
  let result = false;

  result = (base * height) / 2;
  return result;
}

// Desafio 3
// Fonte utilizada para esta parte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

function splitSentence(userEntry) {
  let arrayOfStrings = userEntry.split(' ');
  return arrayOfStrings;
}

// Desafio 4

// Fonte utilizada para esta parte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://medium.com/@rodrigoum/3-maneiras-de-pegar-o-primeiro-e-%C3%BAltimo-elemento-de-um-array-com-javascript-56e92e6bf3f4

function concatName(arrayOfStrings1) {
  //let lastFirst = arrayOfStrings1[arrayOfStrings1.length - 1] + ', ' + arrayOfStrings1[0];
  let lastFirst = `${arrayOfStrings1[arrayOfStrings1.length - 1]}, ${arrayOfStrings1[0]}`
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let up = wins * 3;
  let down = ties * 1;
  let totalPoints = up + down;
  return totalPoints;
}

// Desafio 6

function highestCount(arrayEntry) {
  let numeroMaior = 0;
  let numeroTotal = 0;
  for (let i = 0; i < arrayEntry.length; i += 1) {
    if (arrayEntry[i] > numeroMaior) {
      numeroMaior = arrayEntry[i];
    }
  }
  for (let j = 0; j < arrayEntry.length; j += 1) {
    if (numeroMaior === arrayEntry[j]) {
      numeroTotal += 1;
    }
  }
  return numeroTotal;
}

// Desafio 7
// Fonte utilizada para essa parte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let gotcha1 = Math.abs(mouse - cat1);
  let gotcha2 = Math.abs(mouse - cat2);
  let aim = 0;

  if (gotcha1 > gotcha2) {
    aim = 'cat2';
  } else if (gotcha2 > gotcha1) {
    aim = 'cat1';
  } else if (gotcha1 === gotcha2) {
    aim = 'os gatos trombam e o rato foge';
  }
  return aim;
}

// Desafio 8
function fizzBuzz(arrayFB) {
  let emptyArray = [];

  for (let a = 0; a < arrayFB.length; a += 1) {
    if (arrayFB[a] % 3 === 0 && arrayFB[a] % 5 !== 0) {
      emptyArray.push('fizz');
    } else if (arrayFB[a] % 5 === 0 && arrayFB[a] % 3 !== 0) {
      emptyArray.push('buzz');
    } else if (arrayFB[a] % 3 === 0 && arrayFB[a] % 5 === 0) {
      emptyArray.push('fizzBuzz');
    } else {
      emptyArray.push('bug!');
    }
  }
  return emptyArray;
} console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(auxEn) {
  let change = auxEn.split('');
  for (let i = 0; i < auxEn.length; i += 1) {
    if (change[i] === 'a') {
      change[i] = 1;
    } if (change[i] === 'e') {
      change[i] = 2;
    } if (change[i] === 'i') {
      change[i] = 3;
    } if (change[i] === 'o') {
      change[i] = 4;
    } if (change[i] === 'u') {
      change[i] = 5;
    }
  }
  return change.join('');
}

function decode(auxDe) {
  let change = auxDe.split('');
  for (let i = 0; i < auxDe.length; i += 1) {
    if (change[i] === '1') {
      change[i] = 'a';
    } if (change[i] === '2') {
      change[i] = 'e';
    } if (change[i] === '3') {
      change[i] = 'i';
    } if (change[i] === '4') {
      change[i] = 'o';
    } if (change[i] === '5') {
      change[i] = 'u';
    }
  }
  return change.join('');
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
