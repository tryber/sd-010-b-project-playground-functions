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
let ddd = [];
let part1 = [];
let part2 = [];
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  if (phoneNumber.length > 11) {
    return 'Array com tamanho incorreto';
  }
  for (let index = 0; index < 2; index += 1) {
    ddd.push(phoneNumber[index]);
  }
  for (let index = 2; index < 7; index += 1) {
    part1.push(phoneNumber[index]);
  }
  for (let index = 7; index < 11; index += 1) {
    part2.push(phoneNumber[index]);
  }
  return `(${ddd.join('')}) ${part1.join('')}-${part2.join('')}`;
}
// console log
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 8]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13

function hydrate(bebidas) {
  let count = 0;
  let regex = /\d/g;
  // seu código aqui
  let numeros = bebidas.match(regex);
  for (let index = 0; index < numeros.length; index += 1) {
    count += parseInt(numeros[index], 0);
  }
  if (count === 1) {
    return `${count} copo de água`;
  }
  return `${count} copos de água`;
}

// console log
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('1 cachaça, 4 cervejas e 7 copo de vinho'));
console.log(hydrate('3 vodkas e 1 copo de vinho'));
console.log(hydrate('5 cervejas'));
console.log(hydrate('1 cachaça'));

//
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
