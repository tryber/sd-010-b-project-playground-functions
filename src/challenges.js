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
  // seu código aqui
  //   Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

  // Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

  // Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

  // Retorne a string 'cat2' caso a função catAndMouse receba o parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

  // Retorne a string 'cat1' caso a função catAndMouse receba o parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

  let situation;
  cat1 = mouse - cat1;
  cat2 = mouse - cat2;
  if (cat1 !== cat2) {
    if (cat1 > cat2) {
      situation = 'cat2';
    } else {
      situation = 'cat1';
    }
  } else {
    situation = 'os gatos trombam e o rato foge.';
  }
  return situation;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      result.push('fizz');//foi utilizado o site https://developer.mozilla.org/pt-BR/ para rever o conceito de push
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
  string = info.join('');//foi utilizado o site https://developer.mozilla.org/pt-BR/ para entender o conceito de join
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
