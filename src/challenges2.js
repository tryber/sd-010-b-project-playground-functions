// Desafio 10
function techList(arr, name) {
  arr.sort();
  let result = [];

  if (arr.length === 0) {
    return 'Vazio!';
  }
  for (let tech of arr) {
    result.push({
      tech: `${tech}`,
      name: `${name}`,
    });
  }

  return result;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let numbers = {};

  // verifica a quantidade de elementos no array
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // "Preenche" o objeto numbers com os elementos do array e passa o value de 0 pra todos.
  for (let item of arr) {
    numbers[item] = 0;
  }
  // conta o número de ocorrências de cada elemento do array comparando com o objeto numbers.
  for (let num of arr) {
    numbers[num] += 1;
  }
  // verifica se os números passados estão dentro das condições exigidas.
  for (let occ of arr) {
    if (occ < 0 || occ > 9 || numbers[occ] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let telefone = '(';
  for (let i = 0; i < arr.length; i++) {
    if (telefone.length === 3) {
      telefone += ') ' + arr[i];
    } else if (telefone.length === 10) {
      telefone += '-' + arr[i];
    } else {
      telefone += arr[i];
    }
  }
  return telefone;
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
