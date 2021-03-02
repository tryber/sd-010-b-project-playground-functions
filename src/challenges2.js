// Desafio 10
function techList(tech) {
  let lista = tech.sort();
  let nome = "Lucas";
  let retorno = [];

  for (let index = 0; index < lista.length; index++) {
    retorno.push({tech: lista[index], name: nome});    
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

  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"]));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
