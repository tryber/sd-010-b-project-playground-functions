// Desafio 10
function techList(ListaTech, name) {
  ListaTech = ListaTech.sort();
  let tech = [];
  // console.log(ListaTech);
  // console.log(tamanhoListaTech);

  if (ListaTech.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index <= ListaTech.length - 1; index += 1) {
      tech[index] = {
        tech: ListaTech[index],
        name: name
      }
    }
  }
  return tech;
}
let ListaTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Lucas';
console.log(techList(ListaTech, name));

// Desafio 11
function generatePhoneNumber(num) {
  let mensagem;
  let maiorNum = Math.max(...num);
  let menorNumero = Math.min(...num);
  let contadorMaiorNumero = 0;
  let contador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let key in num) {
    contador[num[key]] += 1;
  }
  contadorMaiorNumero = Math.max(...contador);
  if (num.length < 11 || num.length > 11) {
    mensagem = 'Array com tamanho incorreto.';
  } else if (maiorNum > 10 || menorNumero < 0 || contadorMaiorNumero >= 3) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';
  } else {
    mensagem = '(' + num[0] + num[1] + ')' + ' ' + num[2] + num[3] + num[4] + num[5] + num[6] + '-' + num[7] + num[8] + num[9] + num[10];
  }
  return mensagem;
}

let numeros = [0, 2, 3, 2, 5, 7, 7, 8, 9, 0, 4, 6];
console.log(generatePhoneNumber(numeros));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let mensagem;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    mensagem = true;
  } else {
    mensagem = false;
  }
  return mensagem;
}
let lineA = 1;
let lineB = 1;
let lineC = 1.5;

console.log(triangleCheck(lineA, lineB, lineC));

// Desafio 13
function hydrate(frase) {
  let r = /\d+/g;
  let m;
  let numeros = [];
  let mensagem;
  while ((m = r.exec(frase)) != null) {
    numeros.push((m[0]));
  }
  for (key in numeros) {
    numeros[key] = parseInt(numeros[key]);
  }
  let total = 0;
  for (key in numeros) {
    total = total + numeros[key];
  }

  if (total === 1) {
    mensagem = '1 copo de água';

  } else if (total > 1) {
    mensagem = total + " copos de água"
  }
  return mensagem;
}
let frase = "1 copo de vinho ";
console.log(hydrate(frase));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
