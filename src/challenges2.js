// Desafio 10
function techList(tech) {
  let lista = tech.sort();
  let nome = "Lucas";
  let retorno = [];

  if (lista.length > 1) {
    for (let index = 0; index < lista.length; index++) {
    retorno.push({tech: lista[index], name: nome});    
  }
  } else {
    retorno = 'Vazio!';
  }
  return retorno;
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

  console.log(techList([]));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
