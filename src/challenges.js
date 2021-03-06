// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  let tam = arr.length;
  let conc = arr[tam - 1] + ', ' + arr[0];
  return conc;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(num) {
  let max = Math.max(...num);
  let vezes = 0;
  for (let key in num) {
    if (num[key] === max) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
          array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
          array[i] = 'buzz';
    } else {
          array[i] = 'bug!';
        }
  }
  return array;
}

// Desafio 9
function encode(crip) {
  let crip1 = crip.split('');
  for (let i in crip1 = crip.split('')) {
    if (crip1[i] === 'a') {
      crip1[i] = 1;
    }
    if (crip1[i] === 'e') {
      crip1[i] = 2;
    }
    if (crip1[i] === 'i') {
      crip1[i] = 3;
    }
    if (crip1[i] === 'o') {
      crip1[i] = 4;
    }
    if (crip1[i] === 'u') {
      crip1[i] = 5;
    }
  } return crip1.split(',');
}
function decode(crip1) {
  let crip = crip1.split('');
  for (let i in crip) {
    if (crip[i] === 1) {
      crip[i] = 'a';
    }
    if (crip[i] === 2) {
      crip[i] = 'e';
    }
    if (crip[i] === 3) {
      crip[i] = 'i';
    }
    if (crip[i] === 4) {
      crip[i] = 'o';
    }
    if (crip[i] === 5) {
      crip[i] = 'u';
    }
  } return crip.split(',');
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
