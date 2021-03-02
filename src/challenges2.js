// Desafio 10
function techList(tecnologias, name) {
  let resultado = [];
  for (let index = 0; index < tecnologias.length; index++) {
    let objeto = {
      tech: tecnologias[index],
      name: name,
    }
    resultado.push(objeto);
  }
  return resultado;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))



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
