// Desafio 10
function techList(array, name) {
  let newArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    const newObj = {
      tech: array[index],
      name,
    };
    newArray.push(newObj);
  }
  return newArray.sort();
}

// Desafio 11
function compare3(arr3, cont1, total) {
  if (arr3[cont1] < 0 || arr3[cont1] > 9 || total >= 3) {
    return true;
  }
  return false;
}

function compareArr2(cont, arr2) {
  let total = 0;
  for (let cont2 = 0; cont2 < arr2.length; cont2 += 1) {
    if (arr2[cont] === arr2[cont2]) {
      total += 1;
    }
    let resp = compare3(arr2, cont, total);
    if (resp) {
      return true;
    }
  }
  return false;
}

function compareArr(arr) {
  for (let cont = 0; cont < arr.length; cont += 1) {
    const resp = compareArr2(cont, arr);
    if (resp) {
      return resp;
    }
  }
  return false;
}

function generatePhoneNumber(array) {
  let inputNumber = '';
  let inputNumber2 = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (compareArr(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 2; index <= 6; index += 1) {
    inputNumber += array[index];
  }
  for (let index = 7; index <= 10; index += 1) {
    inputNumber2 += array[index];
  }
  return `(${array[0]}${array[1]}) ${inputNumber}-${inputNumber2}`;
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
