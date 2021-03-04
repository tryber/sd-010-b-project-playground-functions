// Desafio 10
function techList(tech, name) {
  let lista = tech.sort();
  let resultado = [];

  if (lista.length > 1) {
    for (let index = 0; index < lista.length; index += 1) {
      resultado.push({ tech: lista[index], name: name });
    }
  } else {
    resultado = 'vazio!'
  }
  return resultado;
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
