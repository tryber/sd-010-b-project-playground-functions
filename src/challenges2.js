// Desafio 10
function techList(array, name) {
  let techArray = [];
  for (let element of array) {
    let techObject = {
      tech: element,
      name,
    };
    techArray.push(techObject);
  }

  if (!techArray.length) {
    return 'Vazio!';
  }

  return techArray;
}

console.log(techList([], "Matheus"));

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
