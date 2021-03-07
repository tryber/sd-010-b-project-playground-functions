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
console.log(generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumLinesAB = lineA + lineB;
  let sumLinesAC = lineA + lineC;
  let sumLinesBC = lineB + lineC;
  let diffLinesAB = Math.abs(lineA - lineB);
  let diffLinesAC = Math.abs(lineA - lineC);
  let diffLinesBC = Math.abs(lineB - lineC);
  let isTriangle;

  if ((lineA > sumLinesBC) || (lineB > sumLinesAC) || (lineC > sumLinesAB)) isTriangle = false;
  else if ((lineA < diffLinesBC) || (lineB < diffLinesAC) || (lineC < diffLinesAB)) isTriangle = false;
  else isTriangle = true;
  return isTriangle;
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
