// Desafio 10
function obj(array, name) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '') {
      array[i] = 'Vazio';
    }
    let list = {
      tech: array[i],
      name,
    };
    result.push(list);
  }
  return result;
}

function techList(techs, name) {
  let result = [];
  let array = techs.sort();

  if (array === []) {
    result = 'Vazio!';
  } else {
    result = obj(array, name);
  }
  return result;
}
let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Lucas';
console.log(techList(array, name));

// Desafio 11
function numberTests(number) {
  let result = '';
  for (let i in number) {
    if (number.length !== 11) {
      result = 'Array com tamanho incorreto.';
      break;
    } else if (number[i] < 0 || number[i] > 9) {
      result = 'não é possível gerar um número de telefone com esses valores';
      break;
    } else {
      result += number[i];
    }
  }
  return result;
}
// const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(numberTests(x));

function generatePhoneNumber(numArray) {
  let result = '';
  let number = numberTests(numArray);
  if (number[0] !== 'A' && number[0] !== 'N') {
    const ddd = number.slice(0, -9);
    const initNumber = number.slice(2, -4);
    const endNumber = number.slice(-4);
    let phoneNumber = `(${ddd}) ${initNumber} - ${endNumber}`;
    result = phoneNumber;
  } else {
    result = number;
  }
  return result;
}
// const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(x));

// Desafio 12
function difCheck(a, b, c) {
  if (Math.abs(a - b) > c && Math.abs(b - c) > a && Math.abs(c - a) > b) {
    return false;
  }
}
function triangleCheck(a, b, c) {
  let triangle = false;
  if (a + b < c && b + c < a && a + c < b) {
    triangle = false;
  } else if (difCheck(a, b, c) !== false) {
    triangle = true;
  } else {
    triangle = true;
  }
  return triangle;
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
