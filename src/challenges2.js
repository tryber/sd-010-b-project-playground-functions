// Desafio 10
let techList = () => {

}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// A soma dos comprimentos de quaisquer dois lados de um triângulo deve ser maior que o comprimento do terceiro lado. 
// Por exemplo, os números 3, 4 e 5 podem formar um triângulo porque 3 4 > 5, 4 5 > 3 e 5 3 > 4.
// Em contraste, os números 1, 2 e 5 não podem formar um triângulo porque 1 2 < 5.
function triangleCheck(sideA, sideB, sideC) {
  let checkA = sideA < sideB + sideC && sideA > Math.abs(sideB - sideC);
  let checkB = sideB < sideA + sideC && sideB > Math.abs(sideA - sideC);
  let checkC = sideC < sideB + sideA  && sideC > Math.abs(sideB - sideA);
    return checkA && checkB && checkC;
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
