// Desafio 10
function techList(array, string) {
  let returnArray = [];
  array = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    returnArray.push({ tech: array[index], name: string });
  }
  return returnArray;
}

// Desafio 11
function generatePhoneNumber() {
  // sua resposta aqui
}

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
