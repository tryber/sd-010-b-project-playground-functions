// Desafio 10
function techList(techArray, yourName) {
  const checkEmptyArray = techArray.some((item) => item === '' || item.match(/^\W+/g));
  if (checkEmptyArray || techArray.length === 0) {
    return 'Vazio!';
  }
  const newTechArr = techArray.sort().map((techItem) => ({ tech: techItem, name: yourName }));
  return newTechArr;
}

// Desafio 11
/*
* Recorri ao seguinte link pra pesquisar como contar elementos duplicados dentro de um array.
*Source: Source: https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript/19395302#19395302
*/
function isRepeatedValues(arrNumbers) {
  let countItemsObj = {};
  arrNumbers.forEach((number) => { countItemsObj[number] = (countItemsObj[number] || 0) + 1; });
  return Object.values(countItemsObj).includes(3);
}

function isPhoneNumberArray(arrNumbers) {
  const isNotBetween0And9 = (arr) => arr.some((number) => number < 0 || number > 9);
  let response;
  if (arrNumbers.length !== 11) response = 'Array com tamanho incorreto.';
  else if (isNotBetween0And9(arrNumbers) || isRepeatedValues(arrNumbers)) {
    response = 'não é possível gerar um número de telefone com esses valores';
  } else response = true;
  return response;
}
/*
* Recorri ao seguinte link pra formatar a saída no formato de telefone
* Source: https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex
*/
function generatePhoneNumber(arrNumbers) {
  const responseIsPhoneArray = isPhoneNumberArray(arrNumbers);
  if (responseIsPhoneArray !== true) {
    return isPhoneNumberArray(arrNumbers);
  }
  const phoneNumber = arrNumbers.join('').replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // const myTri = new Triangle();
  const isZeroOrLess = (lineA <= 0 || lineB <= 0 || lineC <= 0);
  const isNotTriangle = (lineA + lineB <= lineC) || (lineA + lineC <= lineB) || (lineB + lineC <= lineA);
  return !((isZeroOrLess || isNotTriangle));
}
triangleCheck(3, 6, 8);
// Desafio 13
/*
*Consultei o freeCodeCamp para saber como encontrar números em uma expressão regular.
*Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-numbers
*/
function hydrate(strDrinks) {
  let total = 0;
  let numRegex = /\d/g;
  let result = strDrinks.match(numRegex);
  for (let index = 0; index < result.length; index += 1) {
    result[index] = parseInt(result[index], 10);
    total += result[index];
  }
  if (total > 1) return `${total} copos de água`;
  return `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
