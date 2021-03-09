// Desafio 10
function obj(array, name) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '') {
      array[index] = 'Vazio';
    }
    let list = {
      tech: array[index],
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
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function value(number) {
  let result = true;
  for (let index in number) {
    if (number[index] < 0 || number[index] > 9) {
      result = false;
    }
  }
  return result;
}

function numberTests(number) {
  let result = '';
  for (let index = 0; index < number.length; index += 1) {
    if (value(number) === false) {
      result = 'não é possível gerar um número de telefone com esses valores';
      break;
    } else if (number.length !== 11) {
      result = 'array com tamanho incorreto.';
    } else {
      result += number[index];
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
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    let phoneNumber = `(${ddd}) ${initNumber}-${endNumber}`;
    result = phoneNumber;
  } else {
    result = number;
  }
  return result;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(){

}
// Desafio 13
function hydrate() {

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
