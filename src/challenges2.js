// Desafio 10
function techList(nomesTecnologias, name) {
  if (nomesTecnologias.length > 0) {
    nomesTecnologias = nomesTecnologias.sort();
    let listatecnologias = [];
    for(let index in nomesTecnologias) {
      listatecnologias.push({tech: nomesTecnologias[index], name: name,});
    }
  }
  else {
    return 'Vazio!'
  }
  return listatecnologias;
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
