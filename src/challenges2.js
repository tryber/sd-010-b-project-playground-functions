// Desafio 10
function techList(array, string) {
  let returnArray = [];
  if (array !== []) {
    for (let index = 0; index < array.length; index += 1) {
      returnArray.push({ tech: array[index], name: string });
    }
    return returnArray;
  }
  return 'Vazio!';
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
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
