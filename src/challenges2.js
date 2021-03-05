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
  let padraoTelefone = [];
  for (let index = 0; index <= array.length; index += 1) {
    if (padraoTelefone[array[index]]){
      padraoTelefone[array[index]] += 1;
    } else {
      padraoTelefone[array[index]] = 1;
    }
  }
  return padraoTelefone;
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
