// Desafio 10
function techList(tech) {
  let nome = "Lucas"
  let list = tech.sort();
  let saida = [];

  if (list.length > 1) {
  for (i in list){
      saida.push({tech: list[i], name: nome}); 
  }
} else {
  saida = 'Vazio!'
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
