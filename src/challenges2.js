// Desafio 10
function techList(array, name) {
  // seu código aqui
  array.sort();
  let listaItens;
  if (array.length < 1) {
    return 'Vazio!';
  } else {
    let lista = [];
  for (let index = 0; index < array.length; index += 1) {
    lista.push({ tech: array[index], 
    name: name });
  }
    listaItens = lista;
  }
  return listaItens;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let padraoTelefone;
  let diferenteDoPadrao;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9){
      padraoTelefone = true;
      return padraoTelefone;
    }
    if (array.length > 11 || array.length < 11 || array.length === 0) {
      diferenteDoPadrao = true;
      return diferenteDoPadrao;
    }
  }
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
