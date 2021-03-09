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

  if (techs.length === 0) {
    result = 'Vazio!';
  } else {
    result = obj(array, name);
  }
  return result;
}

// Desafio 11
function value(number) {
  let result = true;
  for (const i in number) {
    if (number[i] < 0 || number[i] > 9) {
      result = false;
    }
  }
  return result;
}

function numberTests(number) {
  let result = '';
  for (let i = 0; i < number.length; i += 1) {
    if (value(number) === false) {
      result = 'não é possível gerar um número de telefone com esses valores';
      break;
    } else if (number.length !== 11) {
      result = 'array com tamanho incorreto.';
    } else {
      result += number[i];
    }
  }
  return result;
}

function generatePhoneNumber(numArray) {
  let result = '';
  let number = numberTests(numArray);
  if (number[0] !== 'a' && number[0] !== 'n') {
    const ddd = number.slice(0, -9);
    const initNumber = number.slice(2, -4);
    const endNumber = number.slice(-4);
    let phoneNumber = `(${ddd}) ${initNumber}-${endNumber}`;
    result = phoneNumber;
  } else {
    result = number;
  }
  return result;
}

// Desafio 12
function difCheck(a, b, c) {
  if (Math.abs(a - b) > c || Math.abs(b - c) > a || Math.abs(c - a) > b) {
    return false;
  }
}
function triangleCheck(a, b, c) {
  let triangle = false;
  if (a + b < c || b + c < a || a + c < b) {
    triangle = false;
  } else if (difCheck(a, b, c) !== false) {
    triangle = true;
  } else {
    triangle = true;
  }
  return triangle;
}

// Desafio 13
function hydrate(entrada) {
  // seu código aqui
  let cups = entrada.replace(/\D/g, '');
  let soma = 0;
  for (let i = 0; i < cups.length; i += 1) {
    soma += parseInt(cups[i], 10);
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
