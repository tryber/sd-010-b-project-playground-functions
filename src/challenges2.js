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
  let limiteRepete = 0;
  let padraoTelefone = 0;
  let numeroExcedente = false;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] <= -1) || (array[index] >= 10)) {
      numeroExcedente = true;
    }
    for (let indexDois = 0; indexDois < array.length; indexDois += 1) {
      if (array[index] === array[indexDois]) {
        limiteRepete += 1;
        if (limiteRepete >= 3) {
          padraoTelefone += limiteRepete;
        }
      }
    }
    limiteRepete = 0;
  }
  if (array.length !== 11) {
    return ("Array com tamanho incorreto.");
  } else if ((numeroExcedente === true) || (padraoTelefone >= 3)) {
    return ("não é possível gerar um número de telefone com esses valores");
  } else {
    let string = '(';
    for (let index = 0; index < 2; index += 1) {
      string += array[index];
    }
    string += ') ';
    for (let index = 2; index < 7; index += 1) {
      string += array[index];
    }
    string += '-';
    for (let index = 7; index < array.length; index += 1) {
      string += array[index];
    }
    return (string);
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
