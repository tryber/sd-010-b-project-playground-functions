// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  }
  return false;
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
function concatName(arra) {
  return string = arra[arra.length - 1] + ', ' + arra[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(maxN) {
  let numb = 0;
  for (const i of maxN) {
    if (Math.max.apply(null, maxN) === i) {
      numb += 1;
    }
  }
  return numb;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) !== Math.abs(mouse - cat2)) {
    if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
      return 'cat1';
    }
    return 'cat2';
  }
  return ('os gatos trombam e o rato foge');
}

// Desafio 8
function fizzBuzz(fiz) {
  let result = [];
  for (let index = 0; index < fiz.length; index += 1) {
    if (fiz[index] % 3 === 0 && fiz[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (fiz[index] % 3 === 0) {
      result.push('fizz');
    } else if (fiz[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(arrayString) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encoding = '';
  for (let i of arrayString) {
    if (code[i]) {
      encoding += code[i];
    } else {
      encoding += i;
    }
  } 
  return encoding;  
}

function decode(arrayString) {
  let code = {
    1: a,
    2: e,
    3: i,
    4: o,
    5: u,
  };
  let decoding = '';
  for (let index of arrayString) {
    if (code[index]) {
      decoding += code[i];
    } else {
      decoding += index;
    }
  } 
  return decoding;
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
