// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let mensagem;
  let maiorNum = Math.max(...numeros);
  let menorNumero = Math.min(...numeros);
  let contadorMaiorNumero = 0;
  for (let key in numeros) {
    if (numeros[key] === maiorNum) {
      contadorMaiorNumero += 1;
    }
  }
  if (numeros.length > 11) {
    mensagem = 'Array com tamanho incorreto.';
  } else if (maiorNum > 10 || menorNumero > 0 || contadorMaiorNumero >= 3) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';

  } else {
    mensagem = '(' + numeros[0] + numeros[1] + ')' + ' ' + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10];
  }
  return mensagem;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
console.log(generatePhoneNumber(numeros));

// Desafio 12
function triangleCheck(lineA, lineB, LineC) {
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
