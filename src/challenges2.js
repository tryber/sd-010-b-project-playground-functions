// Desafio 10
function techList(array, name) {
  let newArray = [];
  if (array.length === 0) {
    return 'Vazio';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    const newObj = {
      tech: array[index],
      name,
    };
    newArray.push(newObj);
  }
  return newArray.sort();
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
