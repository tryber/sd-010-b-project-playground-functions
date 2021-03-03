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
// funções auxiliares do desafio 11
function createString(array) {
  let output = '';
  const numbers = array;
  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
      output += `(${numbers[index]}`;
    } else if (index === 1) {
      output += `${numbers[index]}) `;
    } else if (index === 6) {
      output += `${numbers[index]}-`;
    } else {
      output += numbers[index];
    }
  }
  return output;
}

function checkDigits(array) {
  if (array.length !== 0) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] > 9) {
        return false;
      }
    }
  }
  return true;
}

function checkSize(array) {
  if (array.length !== 11) {
    return false;
  }
  return true;
}

function checkRepetition(array) {
  const sorted = array.sort();
  let number = sorted[0];
  let counter = 0;
  let result = [];
  for (let index = 0; index < sorted.length; index += 1) {
    if (number === sorted[index]) {
      counter += 1;
    } else {
      result.push(counter);
      number = sorted[index];
      counter = 1;
    }
  }
  return result;
}

function validateRepetition(array) {
  const ordered = checkRepetition(array);
  for (let index = 0; index < ordered.length; index += 1) {
    if (ordered[index] >= 3) {
      return false;
    }
  }
  return true;
}
function checkValues(array) {
  const parameter = array;
  if ((checkDigits(parameter) === true) || (validateRepetition(parameter) === true)) {
    return true;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}
// Desafio 11
function generatePhoneNumber(entry) {
  const parameter = entry;
  checkValues(parameter);
  if (checkSize(parameter) === false) {
    return 'Array com tamanho incorreto.';
  }
  return createString(parameter);
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
