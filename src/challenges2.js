// Desafio 10
function checkEmptyArray(arr) {
  if (arr.indexOf('') === 0 || arr.indexOf(undefined) === 0) return true;
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
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(arrNumbers) {
  /* let phoneNumber = [];
  let openParenthesis = '(';
  let closeParenthesis = ')';
  let blank = ' ';
  let dash = '-';
  phoneNumber.push(openParenthesis);
  //xNNxxNNNNNxNNNN
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (index >= 0 && index<=1) {
      
    }
  } */
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumLinesAB = lineA+lineB;
  let sumLinesAC = lineA+lineC;
  let sumLinesBC = lineB+lineC;
  let diffLinesAB = Math.abs(lineA - lineB);
  let diffLinesAC = Math.abs(lineA - lineC);
  let diffLinesBC = Math.abs(lineB - lineC);
  let isTriangle;

  if ((lineA > sumLinesBC) || (lineB > sumLinesAC) || (lineC > sumLinesAB)) {
    isTriangle = false;
  } else if ((lineA < diffLinesBC) || (lineB < diffLinesAC) || (lineC < diffLinesAB)) {
    isTriangle = false;
  } else {
    isTriangle = true;
  }
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
