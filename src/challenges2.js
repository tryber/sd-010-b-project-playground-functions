// Desafio 10
function techList(tech,nome) {
  let list = tech.sort();
  let saida = [];

  for (i in list){
      saida.push({tech: list[i], name: nome}); 
  }

  return saida
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
