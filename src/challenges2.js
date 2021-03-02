// Desafio 10
function techList(nomesTecnologias, nome) {
  let objeto = [];
  if (nomesTecnologias === []) {
    objeto = 'Vazio!';
  } else {
    for (let tecnologias of nomesTecnologias) {
      objeto.push({
        tech: tecnologias,
        name: nome,
      });
    }
  }
  let ordenado = objeto.sort();
  return ordenado;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'lucas'));

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
