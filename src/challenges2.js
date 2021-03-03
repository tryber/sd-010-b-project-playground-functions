// Desafio 10

function techList(tech, name) {
  // seu código aqui
  let armazem = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    armazem.push({ tech: tech.sort()[index], name });
  }
  return armazem;
}

// console log
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Angelo'));

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
