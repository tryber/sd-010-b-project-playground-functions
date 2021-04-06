// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(astring) {
  let phrase = astring.split(' ');
  return phrase;
}

/* Para resolver este desafio (3) consultei uma pergunta feita no seguinte site:
https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres */

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}
// Para resolver o desafio 4 consultei o Slack da turma 10, tribo b

// Desafio 5
function footballPoints(wins, ties) {
  let victories = wins * 3;
  return victories + ties;
}

// Desafio 6
function highestCount(arr) {
  let bigger = 0;
  let biggerrepeat = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > bigger) {
      bigger = arr[index];
      biggerrepeat = 1;
    } else if (arr[index] === bigger) {
      biggerrepeat += 1;
    }
  }
  return biggerrepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let answer = '';
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    answer = 'cat1';
  } else if ((Math.abs(mouse - cat2)) < (Math.abs(mouse - cat1))) {
    answer = 'cat2';
  } else if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
}

// Desafio 8
const verifyFizzBuzz = (theNumber) => {
  if (theNumber % 15 === 0) {
    return 'fizzBuzz';
  }
  if (theNumber % 3 === 0) {
    return 'fizz';
  }
  if (theNumber % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
};

function fizzBuzz(numberArray) {
  let output = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    output.push(verifyFizzBuzz(numberArray[index]));
  }
  return output;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
/* Para resolução desse exercício criei outra função para verificar as condições por fora e diminuir a complexidade da minha função principal,
tive essa ideia olhando o Github de meus colegas dentre eles o Lucas Ribeiro!; */

// Desafio 9
const verifyEncode = (arrToEncode) => {
  const objEncode = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  for (let index = 0; index < arrToEncode.length; index += 1) {
    for (let count = 0; count < 5; count += 1) {
      if (arrToEncode[index] === Object.keys(objEncode)[count]) {
        arrToEncode[index] = Object.values(objEncode)[count];
      }
    }
  }
};

function encode(stringToEncode) {
  const arrayToEncode = stringToEncode.split(['']);
  verifyEncode(arrayToEncode);
  return arrayToEncode.join('');
}

const verifyDecode = (arrToDecode) => {
  const objDecode = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (let index = 0; index < arrToDecode.length; index += 1) {
    for (let count = 0; count < 5; count += 1) {
      if (arrToDecode[index] === Object.keys(objDecode)[count]) {
        arrToDecode[index] = Object.values(objDecode)[count];
      }
    }
  }
};
function decode(stringToDecode) {
  // seu código aqui
  const arrayToDecode = stringToDecode.split(['']);
  verifyDecode(arrayToDecode);
  return arrayToDecode.join('');
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
