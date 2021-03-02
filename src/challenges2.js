// Desafio 10

/*
    Consultei o repositório de Cristiano Lopes Duarte para resolver o próximo exercício.
    Link: https://github.com/tryber/sd-09-project-playground-functions/blob/tkdcris-project-playground-functions/src/challenges.js
*/

function techList(array, name) {
  let arrayAux = [];

  if (array.length>0) {
      for (i in array.sort()) {
          arrayAux.push({tech: array[i], name});
      }
      return arrayAux
  } else {
      return "Vazio!"
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
