// Desafio 10
function techList(array, name) {
  // seu código aqui
  array.sort(array);
  if (array > name) {
    return 1;
  }
  if (array < name) {
    return -1;
  }
  return 0;
}

// Desafio 11
function generatePhoneNumber(array) {
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
