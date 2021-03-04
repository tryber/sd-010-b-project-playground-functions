// Desafio 10
function techList(array, paramterName) {
  let list = [];
  if (array.length < 1) {
    return 'Vazio!';
  }

  for (let i in array.sort()) {
    list.push({
      tech: array[i],
      name: paramterName,
    });
  }
  return list;
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
