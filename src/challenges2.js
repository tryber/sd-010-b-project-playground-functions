// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(num) {
  let mensagem;
  let maiorNum = Math.max(...num);
  let menorNumero = Math.min(...num);
  let contadorMaiorNumero = 0;
  for (let key in num) {
    if (num[key] === maiorNum) {
      contadorMaiorNumero += 1;
    }
  }
  if (num.length < 11 || num.length > 11) {
    mensagem = 'Array com tamanho incorreto.';
  } else if (maiorNum > 10 || menorNumero > 0 || contadorMaiorNumero >= 3) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';

  } else {
    mensagem = '(' + num[0] + num[1] + ')' + ' ' + num[2] + num[3] + num[4] + num[5] + num[6] + '-' + num[7] + num[8] + num[9] + num[10];
  }
  return mensagem;
}
let numeros = [9, 2, 3, 0, 5, -6, 7, 8, -7];
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
