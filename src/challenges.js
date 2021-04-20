// Desafio 1
function compareTrue(value1, value2) {
  let value = null;

  if (value1 && value2) {
    value = true;
  } else {
    value = false;
  }

  return value;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentenca) {
  sentenca += ' ';
  let splitWords = [];
  let word = '';
  let length = sentenca.length - 1;

  for (let i = 0; i < sentenca.length; i += 1) {
    if (sentenca[i] !== ' ') {
      word += sentenca[i];
    } else if (sentenca[i] === ' ' || i === length) {
      splitWords.push(word);
      word = '';
    }
  }

  return splitWords;
}

// Desafio 4
function concatName(arraySentence) {
  return `${arraySentence[arraySentence.length - 1]}, ${arraySentence[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function getMaxNumber(numbers) {
  let higherNumber = 0;
  for (let number in numbers) {
    if (numbers[number] > higherNumber) {
      higherNumber = numbers[number];
    }
  }
  return higherNumber;
}

function highestCount(numbers) {
  let higherNumber = getMaxNumber(numbers);

  let cont = 0;
  for (let index in numbers) {
    if (numbers[index] === higherNumber) {
      cont += 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disRatoGato1 = mouse - cat1;
  let disRatoGato2 = mouse - cat2;
  if (disRatoGato1 < 0) {
    disRatoGato1 *= -1;
  }
  if (disRatoGato2 < 0) {
    disRatoGato2 *= -1;
  }
  let messege = '';
  if (disRatoGato1 < disRatoGato2) {
    messege = 'cat1';
  } else if (disRatoGato2 < disRatoGato1) {
    messege = 'cat2';
  } else {
    messege = 'os gatos trombam e o rato foge';
  }

  return messege;
}

// Desafio 8
function conditionalStructuresFizzBuzz(num) {
  let messege = null;
  if (num % 3 === 0 && num % 5 === 0) {
    messege = 'fizzBuzz';
  } else if (num % 3 === 0) {
    messege = 'fizz';
  } else if (num % 5 === 0) {
    messege = 'buzz';
  } else {
    messege = 'bug!';
  }
  return messege;
}

function fizzBuzz(numbers) {
  for (let number = 0; number < numbers.length; number += 1) {
    numbers[number] = conditionalStructuresFizzBuzz(numbers[number]);
  }
  return numbers;
}

// Desafio 9
function iterateLetters(letters, letterArray) {
  for (let letter in letters) {
    if (letterArray === letter) {
      letterArray = letters[letter];
    }
  }
  return letterArray;
}
function attributeNumbersInLetters(sentence) {
  let letters = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (let index = 0; index < sentence.length; index += 1) {
    sentence[index] = iterateLetters(letters, sentence[index]);
  }
  return sentence;
}
function encode(sentence) {
  sentence = [...sentence];
  let returnSentece = '';
  for (let index = 0; index < attributeNumbersInLetters(sentence).length; index += 1) {
    returnSentece += sentence[index];
  }
  return returnSentece;
}

console.log(encode('aeiouv'));

function attributeLettersInNumbers(letters, letterOrNumber) {
  for (let letter in letters) {
    if (letterOrNumber === letter) {
      letterOrNumber = letters[letter];
    }
  }
  return letterOrNumber;
}
function decode(sentence) {
  sentence = [...sentence];

  let letters = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  for (let index = 0; index < sentence.length; index += 1) {
    sentence[index] = attributeLettersInNumbers(letters, sentence[index]);
  }

  let returnSentece = '';

  for (let index = 0; index < sentence.length; index += 1) {
    returnSentece += sentence[index];
  }
  return returnSentece;
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
