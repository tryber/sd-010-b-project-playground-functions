// Desafio 10
function techList(tec, name) {
  const tecOrder = tec.sort();
  const arrayTec = [];
  tecOrder.forEach((tech) => {
    arrayTec.push({
      tech,
      name,
    });
  });
  return arrayTec;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  const biggerOrSmaller = numbers.some((number) => (number < 0 || number > 9));

  if (biggerOrSmaller) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const textPhone = numbers.join('');
  const partOne = textPhone.slice(0, 2);
  const partSec = textPhone.slice(2, 7);
  const partThr = textPhone.slice(7, 11);
  return `(${partOne}) ${partSec}-${partThr}`;
}
console.log(generatePhoneNumber([1, 1, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
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
