// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true ? 'true' : 'false';
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  let qtt = arr.length;
  let firstString = arr[0];
  let lastString = arr[qtt - 1];

  return `${lastString}, ${firstString}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let max = Math.max(...array);
  let qtt = null;
  array.forEach((e) => {
    qtt += max === e ? 1 : 0;
  });
  return qtt;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let nearCat = null;
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);

  if (positionCat1 < positionCat2) {
    nearCat = 'cat1';
  } else if (positionCat1 > positionCat2) {
    nearCat = 'cat2';
  } else if (positionCat1 === positionCat2) {
    nearCat = 'os gatos trombam e o rato foge';
  }

  return nearCat;
}
// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];

  array.forEach((e) => {
    if ((e % 3 === 0) && (e % 5 === 0)) {
      arrayResult.push('fizzBuzz');
    } else if (e % 3 === 0) {
      arrayResult.push('fizz');
    } else if (e % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  });

  return arrayResult;
}

// Desafio 9
function encode(string) {
  let arrayString = string.split('');
  let dictionary = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let i in arrayString) {
    for (let key in dictionary) {
      arrayString[i] = arrayString[i] === key ? dictionary[key] : arrayString[i];
    }
  }

  return arrayString.join('');
}

function decode(string) {
  let arrayString = string.split('');
  let dictionary = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let i in arrayString) {
    for (let key in dictionary) {
      let number = parseInt(arrayString[i]) !== NaN ? parseInt(arrayString[i]) : arrayString[i];
      arrayString[i] = number === dictionary[key] ? key : arrayString[i];
    }
  }

  return arrayString.join('');
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
