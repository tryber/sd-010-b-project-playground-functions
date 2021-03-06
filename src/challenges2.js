// Desafio 10
function techList(nameTechs, nameUser) {
  // seu código aqui
  let result = []; let lista;
  if (nameTechs.length === 0 || nameUser === '') {
    result = 'Vazio!';
    return result;
  }
  for (let index = 0; index < nameTechs.sort().length; index += 1) {
    lista = {};
    lista.tech = nameTechs[index];
    lista.name = nameUser;
    result[index] = lista;
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  let conditionTrue = isCheckConditions(number);
  if (conditionTrue === false) {
    let numberPhone = '(';
    for (let index = 0; index < number.length; index += 1) {
      numberPhone += number[index];
      if (number[index] === 2) {
        numberPhone += ')';
      }
      if (number[index] === 7) {
        numberPhone += '-';
      }
    }
    return numberPhone;
  }
  let result = conditionTrue;
  return result;
}

function isCheckConditions(number) {
  let result = '';
  if (number.length !== 11) {
    result = 'Array com tamanho incorreto.';
    return result;
  }
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] < 0 || number[index] > 9) {
      result = 'não é possível gerar um número de telefone com esses valores';
      return result;
    }
  }
  result = false;
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);
  let soma = lineA + lineB > lineC && lineB + lineC > lineA;
  let result = false;
  if (soma) {
    return true;
  }
  return result;
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
