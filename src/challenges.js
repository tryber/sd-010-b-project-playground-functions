// Desafio 1
function compareTrue(value1, value2) {
  let result = null;
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let splitedSentence = sentence.split(' ');
  return splitedSentence;
}
// Desafio 4
function concatName(arrayString) {
  let result = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let totalPoints = winsPoints + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  let result = '';
  if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge'; // Jerry wins! :)
  }
  return result;
}
// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(message) {
  let codedMessagem = '';
  let translation = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < message.length; index += 1) {
    let counter = 0;
    for (let key in translation) {
      if (message[index] === key) {
        codedMessagem += translation[message[index]];
        counter += 1;
      } else if (key === 'u' && counter < 1) { //se depois de ter verificado todas as key e nao for encontrado nenhuma igual, ai sim segue para o código.
        codedMessagem += message[index];
        counter += 1;
      }
    }
  }
  return codedMessagem;
}

function decode(message) {
  let encodedMessagem = '';
  for (let index in message) {
    switch (message[index]) {
      case '1':
        encodedMessagem = encodedMessagem + 'a';
        break;
      case '2':
        encodedMessagem = encodedMessagem + 'e';
        break;
      case '3':
        encodedMessagem = encodedMessagem + 'i';
        break;
      case '4':
        encodedMessagem = encodedMessagem + 'o';
        break;
      case '5':
        encodedMessagem = encodedMessagem + 'u';
        break;
      default:
        encodedMessagem = encodedMessagem + message[index];
    }
  }
  return encodedMessagem;
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
