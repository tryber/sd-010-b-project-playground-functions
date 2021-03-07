// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
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
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < arrayNumbers.length; j += 1) {
      if (arrayNumbers[i] === arrayNumbers[j]) {
        cont += 1;
      }
    }
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9 || cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let arrayNumber = [`(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`];
  let number = arrayNumber.join('');
  return number;
}

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
function hydrate(frase) {
  let r = /\d+/g;
  let m;
  let numbers = [];
  let mensagem;
  while ((m = r.exec(frase)) != null) {
    numbers.push((m[0]));
  }
  for (let key in numbers) {
    numbers[key] = parseInt(numbers[key]);
  }
  let total = 0;
  for (let key in numbers) {
    total += numbers[key];
  }

  if (total === 1) {
    mensagem = '1 copo de água';

  } else if (total > 1)   {
    mensagem = total + ' copos de água';
  }
  return mensagem;
}
let frase = '1 cerveja ';
console.log(hydrate(frase));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
