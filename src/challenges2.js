// Desafio 10
function techList(technologies, name) {
  technologies.sort();
  let techObjects = [];
  for (let index in technologies) {
    techObjects.push({
      tech: technologies[index],
      name: name,
    })
  }
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  return techObjects;
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
