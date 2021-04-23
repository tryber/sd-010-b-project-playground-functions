// Desafio 10
function techList(arrayList, name) {
  let result = 'Vazio!';
  if (arrayList.length > 1) {
    result = arrayList.sort().map((tech) => ({
      tech,
      name,
    }));
  }
  return result;
}

// Desafio 11
function timesRepeated(number, numberArray) {
  let count = 0;
  for (let i in numberArray) {
    if (number === numberArray[i]) {
      count += 1;
    }
  }
  return count;
}
function tooRepeated(numberArray) {
  let count = 0;
  let result = 0;
  for (let i in numberArray) {
    if (count < timesRepeated(numberArray[i], numberArray)) {
      count = timesRepeated(numberArray[i], numberArray);
    }
  }
  if (count >= 3) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function outOfBundary(numberArray) {
  let out = 0;
  for (let i in numberArray) {
    if (numberArray[i] > 9 || numberArray[i] < 0) {
      out += 1;
    }
  }
  return out;
}
function generatePhoneNumber(n) {
  let result = '';
  if (n.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (tooRepeated(n) || outOfBundary(n) > 0) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  }
  return result;
}

// Desafio 12
function compareSum(lineA, lineB, lineC) {
  let bc = lineB + lineC;

  let ab = lineA + lineB;

  let ac = lineA + lineC;
  if (lineA < bc && lineB < ac && lineC < ab) {
    return true;
  }
}
function compareAbs(lineA, lineB, lineC) {
  let bc = Math.abs(lineB - lineC);

  let ab = Math.abs(lineA - lineB);

  let ac = Math.abs(lineA - lineC);
  if (lineA > bc && lineB > ac && lineC > ab) {
    return true;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (compareAbs(lineA, lineB, lineC) && compareSum(lineA, lineB, lineC)) {
    result = true;
  }
  return result;
}

// Desafio 13

function hydrate(phrase) {
  // seu código aqui
  // regular expression - /  / é o simbolo para a expressão, \d procura um número, + se tem mais de 1 numero junto, pois se tiver, ele pega ele inteiro, ao inves de separar os dígitos e o g faz uma busca em toda a string ao inves de parar no primeiro encontro.
  let reg = /\d+/g;
  let stringArray = phrase.match(reg);
  const soma = stringArray.reduce((sum, number) => sum + +number, 0);
  return soma === 1 ? `${soma} copo de água` : `${soma} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
