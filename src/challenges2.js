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

function repeatThreeTimes(array) {
  let input = array.sort();
  let number = input[0];
  let count = 0;
  let result = [];
  for (let index = 0; index < input.length; index += 1) {
    if (number === input[index]) {
      count += 1;
    } else if (number !== input[index]) {
      result.push(count);
      number = input[index];
      count = 1;
    }
  }
  result.push(count);
  for (index2 = 0; index2 < result.length; index2 += 1) {
    if (result[index2] >= 3) { 
      return true; 
    }
  }
}
//console.log(repeatThreeTimes([1, 1, 3, 3, 4, 2, 6, 2, 7, 2, 1]));
// Desafio 11
function generatePhoneNumber(array) {

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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
