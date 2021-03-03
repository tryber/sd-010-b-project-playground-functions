// Desafio 10
function techList(array, name) {
  let sort = array.sort();
  let list = [];

  for (let i = 0; i < sort.length; i += 1) {
    let object = {};

    object.tech = sort[i];
    object.name = name;
    list.push(object);
  }

  if (list.length === 0) {
    list = 'Vazio!';
  }

  return list;
}

// Desafio 11
function phoneNumberSize(array) {
  let phoneCheck = '';

  if (array.length !== 11) {
    phoneCheck = 'Array com tamanho incorreto';
  }

  return phoneCheck;
}

function phoneNumberValues(array) {
  let valueCheck = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      valueCheck = 'não é possível gerar um número de telefone com esses valores';
      break;
    }
  }

  return valueCheck;
}

function phoneNumberRepeaterArray(array) {
  let number = 0;
  let times = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        number += 1;
      }
    }

    times.push(number);

    number = 0;
  }

  return times;
}

function phoneNumberRepeater(array) {
  let repeater = '';
  let times = phoneNumberRepeaterArray(array);

  for (let i = 0; i < times.length; i += 1) {
    if (times[i] > 2) {
      repeater = 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return repeater;
}

function generatePhoneNumber(array) {
  if (phoneNumberSize(array) !== '') {
    return 'Array com tamanho incorreto';
  }
  if (phoneNumberValues(array) !== '' || phoneNumberRepeater(array) !== '') {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${array[0]}${array[1]})${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 9]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 1]));
console.log(generatePhoneNumber([1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
