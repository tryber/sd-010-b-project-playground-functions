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
  for (const i in number) {
    if (number[i] < 0 || number[i] > 9) {
      return false;
    }
  }
  return true;
}

function repeatNumber (number) {
  for (let i = 0; i < number.length; i += 1) {
    let count = [];
    for (let j = 0; j < number.length; j += 1) {
      if (number[i] === number[j]) {
        count.push('x');
      }
      if (count.length > 2) {
        return true;
      }
    }
  }
  return false;
}

function testNumber(number) {
  let result = '';
  for (let i = 0; i < number.length; i += 1) {
    if (value(number) === false || repeatNumber(number) === true) {
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
  let number = testNumber(numArray);
  if (number[0] !== 'A' && number[0] !== 'a' && number[0] !== 'n') {
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
console.log(generatePhoneNumber([1, 2, 3, 4, 4, 4, 7, 8, 9, 0, 1]));

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
  if (cups > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
