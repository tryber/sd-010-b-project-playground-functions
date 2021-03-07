// Desafio 10
function techList(array, string) {
  let returnArray = [];
  let sortedArray = array.sort();
  if (sortedArray.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    returnArray.push({ tech: sortedArray[index], name: string });
  }
  return returnArray;
}
// FUNÇÕES AUXILIARES DO DESAFIO 11
function checkSize(array) {
  if (array.length === 11) {
    return true;
  }
  return false;
}

function checkNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return false;
    }
  }
  return true;
}

function counter(item, array) {
  let count = 0;
  for (let number of array) {
    if (item === number) {
      count += 1;
    }
  }
  return count;
}

function validateTimes(array) {
  let answerArray = [];
  for (let key of array) {
    let answer = counter(key, array);
    if (answer >= 3) {
      answerArray.push(answer);
    }
  }
  if (answerArray.includes(3)) {
    return false;
  }
  return true;
}

function buildOutput(array) {
  let output = '';
  for (let index = 0; index < array.length; index += 1) {
    switch (true) {
    case (index === 0):
      output += `(${array[index]}`;
      break;
    case (index === 1):
      output += `${array[index]}) `;
      break;
    case (index === 6):
      output += `${array[index]}-`;
      break;
    default:
      output += `${array[index]}`;
    }
  }
  return output;
}

// Desafio 11
function generatePhoneNumber(array) {
  const numbers = array;
  if (checkSize(numbers) === false) {
    return 'Array com tamanho incorreto.';
  }
  if ((checkNumbers(numbers) === false) || (validateTimes(numbers) === false)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return buildOutput(numbers);
}

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

function checkSum(a, b, c) {
  if ((a < b + c) && (b < a + c) && c < b + a) {
    return true;
  }
}

function checkDiference(a, b, c) {
  if ((a > Math.abs(b - c)) && (b > Math.abs(a - c)) && (c > Math.abs(a - b))) {
    return true;
  }
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((checkSum(lineA, lineB, lineC)) && checkDiference(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
// baseado na resposta de Alex Wayne em: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
function hydrate(string) {
  let numbers = string.replace(/\D/g, '');
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += Number(numbers[index]);
  }
  if (sum > 1) {
    let answer = sum.toString();
    return `${answer} copos de água`;
  }
  let answer = sum.toString();
  return `${answer} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
