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
