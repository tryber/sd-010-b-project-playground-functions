// Desafio 1
function compareTrue(first, second) {
  let resultCompare;
  if (first && second === true) {
    resultCompare = true;
  } else {
    resultCompare = false;
  }
  return resultCompare;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(word) {
  // função split aprendida junto ao site: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings
  let sentence = word.split(' ');
  return sentence;
}

// Desafio 4
function concatName(arrayString) {
  let final = (`${arrayString[arrayString.length - 1]}, ${arrayString[0]}`);
  return final;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let show = 0;
  let number = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > number) {
      number = arrayNumbers[index];
      show = 0;
    }
    if (arrayNumbers[index] === number) {
      show += 1;
    }
  }
  return show;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /* foi utilizado o site https://developer.mozilla.org/pt-BR/ e 
  https://qastack.com.br/programming/4652104/convert-a-negative-number-to-a-positive-one-in-javascript#:~:text=46-,Math.,regulares%3A%20x%20%3D%20%2Dx%20.&text=O%20sinal%20de%20menos%20(%2D),n%C3%BAmeros%20negativos%20em%20n%C3%BAmeros%20positivos.
   para entender o conceito de Math.abs */
  let situation;
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 > cat2) {
    situation = 'cat2';
  } else if (cat1 < cat2) {
    situation = 'cat1';
  } else {
    situation = 'os gatos trombam e o rato foge';
  }
  return situation;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      result.push('fizz'); // foi utilizado o site https://developer.mozilla.org/pt-BR/ para rever o conceito de push
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0) {
      result.push('buzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
   //foi utilizado o site https://developer.mozilla.org/pt-BR/ para entender o conceito de split
  let info = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (info[index] === 'a') {
      info[index] = '1';
    } else if (info[index] === 'e') {
      info[index] = '2';
    } else if (info[index] === 'i') {
      info[index] = '3';
    } else if (info[index] === 'o') {
      info[index] = '4';
    } else if (info[index] === 'u') {
      info[index] = '5';
    }
  }
  string = info.join(''); // foi utilizado o site https://developer.mozilla.org/pt-BR/ para entender o conceito de join
  return string;
}

function decode(array) {
  let info = array.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (info[index] === '1') {
      info[index] = 'a';
    } else if (info[index] === '2') {
      info[index] = 'e';
    } else if (info[index] === '3') {
      info[index] = 'i';
    } else if (info[index] === '4') {
      info[index] = 'o';
    } else if (info[index] === '5') {
      info[index] = 'u';
    }
  }
  array = info.join('');
  return array;
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
