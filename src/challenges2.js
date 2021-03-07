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
function repetTresVezes(number) {
  for (let index = 0; index < number.length; index += 1) {
    let count = [];
    for (let index2 = 0; index2 < number.length; index2 += 1) {
      if (number[index] === number[index2]) {
        count.push('x');
      }
      if (count.length > 2) {
        return true;
      }
    }
  }
  return false;
}
function isCheckConditions(number) {
  let mesage = 'não é possível gerar um número de telefone com esses valores';
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (repetTresVezes(number) === true) {
    return mesage;
  }
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] < 0 || number[index] > 9) {
      return mesage;
    }
  }
  return false;
}
function generatePhoneNumber(number) {
  // seu código aqui
  let conditionTrue = isCheckConditions(number);
  if (conditionTrue === false) {
    let numberPhone = '(';
    for (let index = 0; index < number.length; index += 1) {
      numberPhone += number[index];
      if (index === 1) {
        numberPhone += ') ';
      } if (index === 6) {
        numberPhone += '-';
      }
    }
    return numberPhone;
  }
  return conditionTrue;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let lineAabs = Math.abs(lineA); let lineBabs = Math.abs(lineB);
  let lineCabs = Math.abs(lineC);
  let somaLine = lineA < lineAabs || lineB < lineBabs || lineC < lineCabs;
  let soma = lineA > lineB + lineC || lineB > lineC + lineA || lineC > lineA + lineB;
  if (somaLine || soma) {
    return false;
  }
  return true;
}

// Desafio 13
function returnNumberOfString(str){
  let numEcontrado = [];
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
      case '0':
      numEcontrado.push(str[index]);
      break;
      case '1':
      numEcontrado.push(str[index]);
      break;
      case '2':
      numEcontrado.push(str[index]);
      break;
      case '3':
      numEcontrado.push(str[index]);
      break;
      case '4':
      numEcontrado.push(str[index]);
      break;
      case '5':
      numEcontrado.push(str[index]);
      break;
      case '6':
      numEcontrado.push(str[index]);
      break;
      case '7':
      numEcontrado.push(str[index]);
      break;
      case '8':
      numEcontrado.push(str[index]);
      break;
      case '9':
      numEcontrado.push(str[index]);
    }
  }
  return numEcontrado;
}
function hydrate(str) {
  // seu código aqui
  let numEcontrado = returnNumberOfString(str);
  let result = 0;
  for (let index = 0; index < numEcontrado.length; index += 1) {
    result += Number(numEcontrado[index]);
  }
  if (result <= 1) {
    return `${result} copo de água`;
  } else {
    return `${result} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
