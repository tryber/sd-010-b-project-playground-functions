// Desafio 10
function techList(array, name) {
  let techName = {
    tech: array.sort,
    name,
  };

  if (array.length == 0) {
    console.log('Vazio!');

    for (i = 0; i < array.length; i += 1) {
      let techName = {
        tech: array.sort,
        name,
      };
    }
  }
  return (techName);
}
console.log(techList(['JavaScript', 'CSS', 'HTML'], 'Lucas'));

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
