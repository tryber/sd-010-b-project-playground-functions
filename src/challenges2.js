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
  let padrao;
  let parentesesNumero = '(';
  for (let index = 0; index < array.length; index += 1) {
    if (padraoTelefone[array[index]]) {
      padraoTelefone[array[index]] += 1;
      return Object.values(padraoTelefone).sort().reverse()[0];
    } else {
        padraoTelefone[array[index]] = 1;
    }
    if (padraoTelefone[array] >= 3) {
      padrao = false;
      return padrao;
    }
    if (array[index] < 0 || array[index] >9) {
      padrao = true;
      return padrao;
    }
    if (index === 2) {
      parentesesNumero += ')';
      parentesesNumero += array[index];
      return parentesesNumero;
    }
    if (index === 7) {
      parentesesNumero += '-';
      parentesesNumero += array[index];
      return parentesesNumero;
    }
    if (array.length === 11) {
      let numeroExcedente = padrao[array];
      let limiteRepete = padrao[array];
      if (numeroExcedente && limiteRepete) {
        return padrao(array);
      }
      return 'não é possível gerar um número de telefone com esses valores';
    }
    return 'Array com tamanho incorreto.';
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
