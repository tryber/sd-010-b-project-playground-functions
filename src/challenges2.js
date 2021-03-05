// Desafio 10
function techList(array, name) {
  // seu código aqui
  array.sort();
  if (array.length < 1) {
    'Vazio!';
  } else {
    let lista = [];
    for (let index = 0; index < array.length; index += 1) {
      lista.push({tech: array[index], name: name});
    }
    return lista;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
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
