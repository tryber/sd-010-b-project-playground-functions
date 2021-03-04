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
  if (string.length === 9) {
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
