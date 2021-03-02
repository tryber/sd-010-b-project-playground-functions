// Desafio 10
function techList(tecnologias, name) {
  let resultado = [];
  let ordemCrescente = tecnologias.sort();
  for (let index = 0; index < ordemCrescente.length; index++) {
    let objeto = {
      tech: ordemCrescente[index],
      name: name,
    }
    resultado.push(objeto);
  }
  return resultado;
}
// Auxilio por orientação:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
