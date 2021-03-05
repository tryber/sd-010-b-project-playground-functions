// Desafio 10
function techList(tech, name) {
  tech.sort();
  let tecnologias = [];
  for (let index in tech) {
    let bloco = {
      tech: tech[index],
      name: name,
    }
    tecnologias.push(bloco);
  }
  if (tech.length === 0) {
    return "Vazio!"
  }
  return tecnologias;
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
  // veja os ultimos exercicios
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
