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
function numerosInvalidos(numeros) {
  for (let num = 0; num < numeros.length; num += 1) {
    let contador = 0;
    for (let index = 0; index < numeros.length; index += 1) {
      if (numeros[index] === numeros[num]) {
        contador += 1;
      }
      if (numeros[index] < 0 || numeros[index] > 9 || contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
}

function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let ddd = []; let part1 = []; let part2 = [];
  let numerosIncorretos = numerosInvalidos(phoneNumber);
  if (numerosIncorretos) return numerosIncorretos;
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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11]));
console.log(generatePhoneNumber([1, 2, 3, 4, 4, 6, 7, 8, 9, 0, 4]));
console.log(generatePhoneNumber([2, 1, 5, 8, 3, 7, 6, 8, 9, 5, 9]));
console.log(generatePhoneNumber([2, 1, 2, 8, 3, 2, 6, 8, 9, 5, 2]));
console.log(generatePhoneNumber([21, 1, 9, 8, 3, 7, 6, 8, 9, 5, 2]));
console.log(generatePhoneNumber([1, 2, 3, 4, 2]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, -8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(generatePhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let difA = Math.abs(lineB - lineC);
  if (lineA < lineB + lineC && lineA > difA) {
    return true;
  }
  return false;
}
// console log
console.log(triangleCheck(5, 2, 5));

// Desafio 13
// utilizado para esse desafio: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
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
