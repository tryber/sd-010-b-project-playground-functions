// Desafio 10
function checkEmptyArray(arr) {
  if (arr.indexOf('') === 0 || arr.length < 1) return true;
  return false;
}

function techList(techArray, yourName) {
  if (checkEmptyArray(techArray) === true) {
    return 'Vazio!';
  }
  let objArr = [];
  let sortTechList = techArray.sort();
  for (const key in sortTechList) {
    objArr.push({ tech: sortTechList[key], name: yourName });
  }
  return objArr;
}

// Desafio 11
/*
* Recorri a esses sites pra entender o funcionamento da função slice() e splice().
*Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice
*Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-using-splice
*/
function isNotBetween0And9(arrNumbers) {
  for (const index in arrNumbers) {
    if (arrNumbers[index] > 9 || arrNumbers[index] < 0) {
      return true;
    }
  }
  return false;
}

function isRepeatedValues(arrNumbers) {
  for (const index in arrNumbers) {
    let count = 0;
    let valueToBeChecked = arrNumbers[index];
    for (const index2 in arrNumbers) {
      if (arrNumbers[index2] === valueToBeChecked) count += 1;
    }
    if (count > 2) return true;
  }
  return false;
}

function isPhoneNumberArray(arrNumbers) {
  let response;
  if (arrNumbers.length !== 11) response = 'Array com tamanho incorreto.';
  else if (isNotBetween0And9(arrNumbers) || isRepeatedValues(arrNumbers)) {
    response = 'não é possível gerar um número de telefone com esses valores';
  } else response = true;
  return response;
}

function generatePhoneNumber(arrNumbers) {
  let aux;
  const responseIsPhoneArray = isPhoneNumberArray(arrNumbers);
  if (responseIsPhoneArray !== true) {
    return isPhoneNumberArray(arrNumbers);
  }

  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (index === 0) {
      aux = arrNumbers.slice(index, index + 1);
      arrNumbers.splice(index, 1, `(${aux}`);
    }
    if (index === 2) {
      aux = arrNumbers.slice(index, index + 1);
      arrNumbers.splice(index, 1, `) ${aux}`);
    }
    if (index === 7) {
      aux = arrNumbers.slice(index, index + 1);
      arrNumbers.splice(index, 1, `-${aux}`);
    }
  }
  return arrNumbers.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumABCompareC = (lineA + lineB) > lineC;
  let sumACCompareB = (lineA + lineC) > lineB;
  let sumBCCompareA = (lineB + lineC) > lineA;
  let diffABCompareC = Math.abs(lineA - lineB) < lineC;
  let diffACCompareB = Math.abs(lineA - lineC) < lineB;
  let diffBCCompareA = Math.abs(lineB - lineC) < lineA;
  let isTriangle;

  if (!sumABCompareC || !sumACCompareB || !sumBCCompareA) isTriangle = false;
  else if (!diffABCompareC || !diffACCompareB || !diffBCCompareA) isTriangle = false;
  else isTriangle = true;
  return isTriangle;
}

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
