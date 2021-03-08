// Desafio 1
function compareTrue(check1, check2) {
  let check3 = false;
  if ((check1 === true) && (check2 === true)) {
    check3 = true;
  }
  return check3;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
let base = 51;
let height = 1;
console.log(calcArea(base, height));

// Desafio 3
function splitSentence(string) {
  let array = [];
  let help = '';
  for (let i = 0; i <= string.length; i += 1) {
    if (string[i] === ' ' || string[i] === undefined) {
      array.push(help);
      help = '';
    } else if (string[i] !== ' ') {
      help += string[i];
    }
  }
  return array;
}
console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(array) {
  let help = [];
  let string;
  for (let i = 0; i < array.length; i += 1) {
    if (i === array.length - 1) {
      help[0] = array[i];
    } else if (i === 0) {
      help[1] = array[i];
    }
  }
  string = help;
  return string;
}
console.log(concatName(['foquete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(0, 0));

// Desafio 6
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// Usado a função para retornar o maior valor;
function highestCount(array) {
  const max = Math.max.apply(null, array);
  let qtdNum = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (max === array[index]) {
      qtdNum += 1;
    }
  }
  return qtdNum;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let string;
  if (distanceCat2 < distanceCat1) {
    string = 'cat2';
  } else if (distanceCat2 > distanceCat1) {
    string = 'cat1';
  } else {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
}
console.log(catAndMouse(5, 2, 2));

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
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
console.log(fizzBuzz([7, 9]));

// Desafio 9
// https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
// usando o metodo replace para remover a ocorerencia de vogais
function encode(string) {
  string = string.replace(/a/gi, "1");
  string = string.replace(/e/gi, "2");
  string = string.replace(/i/gi, "3");
  string = string.replace(/o/gi, "4");
  string = string.replace(/u/gi, "5");
  return string;
}
function decode(string) {
  string = string.replace(/1/gi, "a");
  string = string.replace(/2/gi, "e");
  string = string.replace(/3/gi, "i");
  string = string.replace(/4/gi, "o");
  string = string.replace(/5/gi, "u");
  return string;
}
console.log(encode('hi there!'));
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
