// Desafio 10
function techList(array, name) {
  let techArray = [];
  array = array.sort();
  for (let element of array) {
    let techObject = {
      tech: element,
      name,
    };
    techArray.push(techObject);
  }

  if (!techArray.length) {
    return 'Vazio!';
  }

  return techArray;
}

// Desafio 11
function numberOfRepetition(array, number) {
  let count = 0;
  for (let num of array) {
    if (number === num) {
      count += 1;
    }
  }
  return count;
}

function findRepeated(array) {
  let repeatedObject = {};
  for (let num of array) {
    repeatedObject[num] = numberOfRepetition(array, num);
  }

  return repeatedObject;
}

function higherThan(array, number) {
  let higher = false;
  let object = findRepeated(array);
  for (let repetition in object) {
    if (object[repetition] >= number) {
      higher = true;
    }
  }
  return higher;
}

function isPhoneValid(array) {
  let filtered = array.filter((value) => value > 9 || value < 0);
  let greaterThanThree = higherThan(array, 3);

  if (filtered.length > 0 || greaterThanThree) {
    return false;
  }

  return true;
}

function addPhoneStructure(string) {
  if (string.length === 0) {
    string += '(';
  }
  if (string.length === 3) {
    string += ')';
  }
  if (string.length === 4) {
    string += ' ';
  }
  if (string.length === 10) {
    string += '-';
  }
  return string;
}

function generatePhoneNumber(array) {
  let phoneNumber = '';

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (!isPhoneValid(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  array.forEach((value) => {
    phoneNumber = addPhoneStructure(phoneNumber);
    phoneNumber += value;
  });

  return phoneNumber;
}

// Desafio 12
function triangleLineValidator(lineToValidate, line2, line3) {
  const valid = lineToValidate < line2 + line3 && lineToValidate > Math.abs(line2 - line3);

  return valid;
}

function triangleCheck(lineA, lineB, lineC) {
  let validA = triangleLineValidator(lineA, lineB, lineC);
  let validB = triangleLineValidator(lineB, lineA, lineC);
  let validC = triangleLineValidator(lineC, lineA, lineB);

  if (!validA && !validB && !validC) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(string) {
  let numOfCups = 0;
  let cupsOfWater = 'copos de água';

  for (let character of string) {
    if (Number.isInteger(parseInt(character, 10))) {
      numOfCups += parseInt(character, 10);
    }
  }

  if (numOfCups === 1) {
    cupsOfWater = `${numOfCups} copo de água`;
  } else {
    cupsOfWater = `${numOfCups} ${cupsOfWater}`;
  }

  return cupsOfWater;
}

console.log(hydrate('2'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
