// Desafio 10
function techList(array, string) {
  let returnArray = [];
  array = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    returnArray.push({ tech: array[index], name: string });
  }
  return returnArray;
}

function repeatThreeTimes(array) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // seu código aqui
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5]));
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
