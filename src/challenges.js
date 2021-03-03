// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let concat = `${lastIndex}, ${firstIndex}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let result = wins + ties;
  return result;
}

// Desafio 6
function highestCount(numArray) {
  let objNum = {};
  for (let index = 0; index < numArray.length; index += 1) {
    if (objNum[numArray[index]] === undefined) {
      objNum[numArray[index]] = 1;
    } else {
      objNum[numArray[index]] += 1;
    }
  }
  let bigNum = Object.keys(objNum)[0];
  let sizeobjNum = Object.keys(objNum).length;
  let repeatedBigNum = 0;
  if (sizeobjNum !== 1) {
    for (let key in objNum) {
      if (bigNum < key) {
        repeatedBigNum = objNum[key];
      } else {
        repeatedBigNum = repeatedBigNum;
      }
    }
  } else {
    repeatedBigNum = objNum[Object.keys(objNum)[0]];
  }
  return repeatedBigNum;
}
//  REFERENCIA => Primeira parte do Gabarito do course da Trybe em exercício similar
//  REFERENCIA => https://pt.stackoverflow.com/questions/134393/como-obter-o-primeiro-item-de-um-objeto-em-javascript
//  REFERENCIA => https://pt.stackoverflow.com/questions/15058/como-saber-o-tamanho-quantidade-de-propriedades-atributos-de-um-objeto-em-ja

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < 0) {
    distanceCat1 *= (-1); 
  }else if (distanceCat2 < 0) {
    distanceCat2 *= (-1);
  }
  
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(num) {
  let convertArray = [];
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] % 3 == 0 && num[index] % 5 == 0){
      convertArray.push('FizzBuzz') ;
    } else if (num[index] % 3 == 0) {
      convertArray.push('Fizz');
    } else if (num[index] % 5 == 0) {
      convertArray.push('Buzz');
    } else {
      convertArray.push('Bug!');
    }
  }
  return convertArray;
}

// Desafio 9
function encode(string) {
  let code = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == 'a') {
      code += '1';
    } else if (string[index] == 'e') {
      code += '2';
    } else if (string[index] == 'i') {
      code += '3';
    } else if (string[index] == 'o') {
      code += '4';
    } else if (string[index] == 'u') {
      code += '5';
    } else {
      code += string[index];
    }
  }
  return code;
}

console.log(encode("hi there!"))
function decode(string) {
  let decodeText = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == '1') {
      decodeText += 'a';
    } else if (string[index] == '2') {
      decodeText += 'e';
    } else if (string[index] == '3') {
      decodeText += 'i';
    } else if (string[index] == '4') {
      decodeText += 'o';
    } else if (string[index] == '5') {
      decodeText += 'u';
    } else {
      decodeText += string[index];
    }
  }
  return decodeText;
}

console.log(decode("h3 th2r2!"))

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


