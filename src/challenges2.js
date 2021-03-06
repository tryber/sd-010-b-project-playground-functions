// Desafio 10

function techList(array, nome) {
  if (array.length === 0) return 'Vazio!';
  array = array.sort();
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push({
      tech: array[index],
      nome,
    });
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber() {}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// REFERÊNCIAS: https://stackoverflow.com/ , https://developer.mozilla.org/
// Desafio 13
function hydrate(string) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  string = string.match(/\d+/g).map(Number).reduce(reducer);
  return `${string} copo${string > 1 ? 's' : ''} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
