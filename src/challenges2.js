// Desafio 10
function techList() {

}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  let triCheck = false;

  if (a < b + c === true && a > Math.abs(b - c) === true) {
    triCheck = true;
  }
  return triCheck;
}

// Desafio 13
function hydrate(caracteres) {
  let result = '';
  let arrayNumbers = caracteres.match(/[0-9]/g);
  let soma = 0;
  for (let key of arrayNumbers) {
    soma = soma += parseInt(key);
  }
  if (soma === 1) {
    result = soma + ' copo de água';
  } else {
    result = soma + ' copos de água';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
