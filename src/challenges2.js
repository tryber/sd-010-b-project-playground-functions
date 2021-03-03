// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }

  let arrSorted = arr.sort();
  let objArr = [];
  for (let index = 0; index < arrSorted.length; index += 1) {
    objArr[index] = {};
    objArr[index].tech = arrSorted[index];
    objArr[index].name = name;
  }
  return objArr;
}

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
