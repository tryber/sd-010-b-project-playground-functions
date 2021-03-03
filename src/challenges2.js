// Desafio 10
function techList(array, name) {
  let arraySort = array.sort();
  let arrayObject = [];
  if (array.length > 0) {
    for (index = 0; index < array.length; index += 1) {
      arrayObject.push({ tech: arraySort[index] });
      arrayObject.push({ name: name });
    }
  } else {
    return 'Vazio!';
  }
  return arrayObject;
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
