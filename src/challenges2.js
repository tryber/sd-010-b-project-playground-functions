// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!'
  }
  let techArray = [];
  let sortArray = tech.sort();
  for (let index = 0; index < sortArray.length; index += 1) {
    techArray[index] = {
      tech: sortArray[index],
      name,
    };
  }
  return techArray;
}

// Desafio 11
function generatePhoneNumber(num) { 
  let mensagem;
  let bigNum = Math.max(...num);
  let menorNumero = Math.min(...num);
  let countBigNumber = 0;
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let key in num) {
    count[num[key]] += 1;
  }
  countBigNumber = Math.max(...contador);
  if (num.length < 11 || num.length > 11) {
    mensagem = 'Array com tamanho incorreto.';
  } else if (bigNum > 10 || menorNumero < 0 || countBigNumber >= 3) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';
  } else {
    mensagem = '(' + num[0] + num[1] + ')' + ' ' + num[2] + num[3] + num[4] + num[5] + num[6] + '-' + num[7] + num[8] + num[9] + num[10];
  }
  return mensagem;
}

let numeros = [0, 2, 3, 2, 5, 7, 7, 8, 9, 0, 4, 6];

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
let lineA = 10;
let lineB = 14;
let lineC = 8;

triangleCheck(lineA, lineB, lineC);

// Desafio 13
function hydrate() {
  let r = /\d+/g;
  let m;
  let numbers = [];
  let mensagem;
  while ((m = r.exec(frase)) != null) {
    numbers.push((m[0]));
  }
  for (key in numbers) {
    numbers[key] = parseInt(numbers[key]);
  }
  let total = 0;
  for (key in numbers) {
    total = total + numbers[key];
  }

  if (total === 1) {
    mensagem = '1 copo de água';

  } else if (total > 1) {
    mensagem = total + " copos de água"
  }
  return mensagem;
}
let frase = "1 cerveja ";

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
