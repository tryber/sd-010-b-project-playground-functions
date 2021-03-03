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
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  let numbers = phoneNumber;
  let ddd = [];
  let part1 = [];
  let part2 = [];
  for (let index = 0; index < 2; index += 1) {
    ddd.push(numbers[index]);
  }
  for (let index = 2; index < 7; index += 1) {
    part1.push(numbers[index]);
  }
  for (let index = 7; index < 11; index += 1) {
    part2.push(numbers[index]);
  }
  return `(${ddd.join('')}) ${part1.join('')}-${part2.join('')}`;
}
// console log
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
