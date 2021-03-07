// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
// function numTests(number) {
//   let result = [];
//   for (let i in number) {
//     if (number.length !== 11) {
//       return "Array com tamanho incorreto.";

//     } else if (number[i] < 0) {
//       return "não é possível gerar um número de telefone com esses valores";

//     } else if (number[i] > 9) {
//       return "não é possível gerar um número de telefone com esses valores";

//     } else {
//       result.push(number[i]);
//     }
//   }
//   return result
// }
// let cell = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(numTests(cell));

function generatePhoneNumber() {
  // let result = '';
  // let phoneNumber = `(${}) ${} - ${}`;
  // return result
}

// Desafio 12
function difCheck(a, b, c) {
  if (Math.abs(a - b) > c && Math.abs(b - c) > a && Math.abs(c - a) > b) {
    return false;
  }
}
function triangleCheck(a, b, c) {
  let triangle = false;
  if (a + b < c && b + c < a && a + c < b) {
    triangle = false;
  } else if (difCheck(a, b, c) !== false) {
    triangle = true;
  } else {
    triangle = true;
  }
  return triangle;
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
