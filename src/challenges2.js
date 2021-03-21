// Desafio 10
function techList(nomesTecnologias, name) {
  let listaTecnologias = [];
  if (nomesTecnologias.length > 0) {
    nomesTecnologias.sort();
    for(let index in nomesTecnologias) {
      listaTecnologias.push({tech: nomesTecnologias[index], 
      name: name,
      });
    }
    return listaTecnologias;
  }
  else {
    return 'Vazio!';
  }
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
