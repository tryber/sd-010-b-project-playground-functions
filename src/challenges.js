// Desafio 1
function compareTrue(valor1, valor2) {
  const bool = valor1 && valor2;

  return bool;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');

  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  const concatenated = `${array[(array.length - 1)]}, ${array[0]}`;

  return concatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  const totalPoints = (wins * 3) + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNum) {
  //  Procura o maior valor
  let highestNum = arrayOfNum.reduce((num1, num2) => Math.max(num1, num2));

  //  Filtra os valores que são iguais ao maior valor
  let count = arrayOfNum.filter((value) => value === highestNum);

  //  Retorna o tamanho do array do count
  return count.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Valores absolutos, ou seja, ignora o negativo
  const catDistance1 = Math.abs(mouse - cat1);
  const catDistance2 = Math.abs(mouse - cat2);

  if (catDistance1 < catDistance2) {
    return 'cat1';
  }
  if (catDistance1 > catDistance2) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayOfNum) {
  let fizzBuzzArray = arrayOfNum.map((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      return 'fizzBuzz';
    }

    if (element % 3 === 0) {
      return 'fizz';
    }

    if (element % 5 === 0) {
      return 'buzz';
    }

    return 'bug!';
  });

  return fizzBuzzArray;
}

// Desafio 9
function changeCharacterCode(string, characters, codes) {
  for (let code in codes) {
    if (characters === code) {
      string = string.replace(characters, codes[code]);
    }
  }

  return string;
}

function encode(string) {
  const codes = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let encoded = string;

  for (let letter of encoded) {
    encoded = changeCharacterCode(encoded, letter, codes);
  }

  return encoded;
}

function decode(string) {
  const codes = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let decoded = string;

  for (let letter of decoded) {
    decoded = changeCharacterCode(decoded, letter, codes);
  }

  return decoded;
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
