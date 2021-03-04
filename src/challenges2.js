// Desafio 10
function techList(array, paramterName) {
  let list = [];
  if (array.length < 1) {
    return 'Vazio!';
  }

  array.sort();
  array.forEach((e) => {
    list.push({
      tech: e,
      name: paramterName,
    });
  });

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
