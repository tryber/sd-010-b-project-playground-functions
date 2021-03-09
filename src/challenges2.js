// Desafio 10
function techList(array, name) {
  let techName = {
    tech: array.sort(),
    name: name
  };
  if (array.length == 0) {
    let empty = '';
    console.log('Vazio!');
    return(empty);
  }
  let full = [];
  for (i = 0; i < array.length; i += 1) {
    full.push({ tech: array[i], name });
  }
  return (full);
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
