// Desafio 10

function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  array = array.sort();
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push({
      tech: array[index],
      name,
    });
  }
  return newArray;
}

// Desafio 11
function convert(array, target1, target2) {
  return array.slice(target1, target2).toString().replace(/,/g, '');
}
let check = (array) => {
  let counts = {};
  array.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  array = Object.values(counts).some((index) => index >= 3);
  return array;
};
function generatePhoneNumber(array) {
  let message = 'não é possível gerar um número de telefone com esses valores';
  if (array.length !== 11) return ('Array com tamanho incorreto.');
  if (array.some((index) => index < 0)) return message;
  if (array.some((index) => index > 9)) return message;
  if (check(array)) return message;
  let number1 = convert(array, 2, 7);
  let number2 = convert(array, 7);
  let dd = convert(array, 0, 2);
  return `(${dd}) ${number1}-${number2}`;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return 'test'
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
