// Desafio 1
function compareTrue(a, b) {
  let boolean1 = a;
  let boolean2 = b;
  let result = false;
  if (boolean1 === true && boolean2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let b = base;
  let h = height;
  let area = (b * h) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let s = `${string} `;
  let split = '';
  let resultArray = [];

  for (let index = 0; index < s.length; index += 1) {
    if (s[index] !== ' ') {
      split += s[index];
    } else {
      resultArray.push(split);
      split = '';
    }
  }
  return resultArray;
}

// Desafio 4
function concatName(array) {
  let a = array;
  let tempString = '';
  tempString = `${a[a.length - 1]}, ${a[0]}`;
  return tempString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highNumber(arrayNumber) {
  let highNum = 0;
  for (let i = 0; i < arrayNumber.length; i += 1) {
    if (arrayNumber[i] > highNum) {
      highNum = arrayNumber[i];
    }
  }
  return highNum;
}

function highestCount(listOfNum) {
  let hNumber = highNumber(listOfNum);
  let repeatCount = 0;
  for (let i = 0; i < listOfNum.length; i += 1) {
    if (listOfNum[i] === hNumber) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function calcDist(mouse, cat) {
  let dist = 0;
  if (mouse > cat) {
    dist = mouse - cat;
  } else {
    dist = cat - mouse;
  }
  return dist;
}
function catAndMouse(mouse, cat1, cat2) {
  let dis1 = calcDist(mouse, cat1);
  let dis2 = calcDist(mouse, cat2);
  let result = '';
  if (dis1 < dis2) {
    result = 'cat1';
  } else if (dis1 === dis2) {
    result = 'os gatos trombam e o rato foge';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fNbTest(number) {
  let result = '';
  if (number % 3 === 0 && number % 5 !== 0) {
    result = 'fizz';
  } else if (number % 5 === 0 && number % 3 !== 0) {
    result = 'buzz';
  }
  return result;
}

function fbTest(number) {
  let result = '';
  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 !== 0 && number % 5 !== 0) {
    result = 'bug!';
  }
  return result;
}

function fizzBuzz(fbList) {
  let result = [];
  for (let i in fbList) {
    if (fNbTest(fbList[i]) === 'fizz') {
      result.push('fizz');
    } else if (fNbTest(fbList[i]) === 'buzz') {
      result.push('buzz');
    } else {
      result.push(fbTest(fbList[i]));
    }
  }
  return result;
}

// Desafio 9
function test(obj, sentence) {
  let result = '';
  for (let i in sentence) {
    if (obj[sentence[i]] !== undefined) {
      result += obj[sentence[i]];
    } else {
      result += sentence[i];
    }
  }
  return result;
}

function encode(sentence) {
  let coding = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return test(coding, sentence);
}

function decode(sentence) {
  let coding = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return test(coding, sentence);
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
