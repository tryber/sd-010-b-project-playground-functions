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
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
