// Desafio 10

function techList(array, nome) {
  array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    array[index] = {
      tech: array[index],
      name: nome,
    };
  }
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
  let regex = /\d+/g;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let matches = string.match(regex);
  matches = matches.map(Number);
  return `${matches.reduce(reducer)} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
