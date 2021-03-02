// Hello! Welcome to my playground!

// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  const techList = [];
  const sortedArray = tech.sort();
  for (let index = 0; index < sortedArray.length; index += 1) {
    techList[index] = {
      tech: sortedArray[index],
      name: name,
    };
  }
  return techList;
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
