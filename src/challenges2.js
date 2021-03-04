// Desafio 10
function techList(tech, name) {
  let newArray = tech.sort();
  let dado = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < newArray.length; i += 1) {
    dado[i] = {
      tech: newArray[i],
      name: `${name}`,
    };
  }
  return dado;
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
