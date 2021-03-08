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
  
  if (a < b + c === true && a > Math.abs(b - c) === true ) {
    triCheck = true;
  }
  return triCheck;
}

// Desafio 13
function hydrate(caracteres) {
  
  let frase = caracteres
  let arrayNumbers = frase.match(/[0-9]/g)
  let soma = 0;
  for (key of arrayNumbers ) {
  soma = parseInt(soma) + parseInt(key)
  }
  if (soma === 1) {
    result = soma + ' copo de água';
  } else {
    result = soma + ' copos de água';
  }
  return result; 
} 

console.log(hydrate("2 cerveja, 9"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
