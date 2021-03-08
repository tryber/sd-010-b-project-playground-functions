// Desafio 10
function techList() {
  
}

// Desafio 11
function generatePhoneNumber() {
  let numero1 = convert(array, 2, 7);
  let numero2 = convert(array, 7);
  let ddd = convert(array, 0, 2);
  return `(${ddd}) ${numero1}-${numero2}`
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
