// Desafio 10
function techList(arrayTech, name) {
  // meu código aqui
  let toReturn;
  let sortArrayTech = arrayTech.sort();
  if (arrayTech.length < 1) {
    toReturn = 'Vazio!';
  } else {
    let techLists = [];
    for (let i = 0; i < sortArrayTech.length; i += 1) {
      techLists.push({ tech: sortArrayTech[i], name });
    }
    toReturn = techLists;
  }
  return toReturn;
}

// Desafio 11
function verifycaOccurr(toVerify) {
  let quantyOccurre = 0;
  let maxQuantyOccurre = 0;
  let toReturn;
  for (let numVerificado = 0; numVerificado < toVerify.length; numVerificado += 1) {
    for (let numVerificando = 0; numVerificando < toVerify.length; numVerificando += 1) {
      if (toVerify[numVerificado] === toVerify[numVerificando]) {
        quantyOccurre += 1;
      }
    }
    if (maxQuantyOccurre < quantyOccurre) {
      maxQuantyOccurre = quantyOccurre;
    }
    quantyOccurre = 0;
  }
  if (maxQuantyOccurre > 2) {
    toReturn = true;
  } else {
    toReturn = false;
  }
  return toReturn;
}

function verifyNum(toVerify) {
  let existsZero = false;
  for (let i = 0; i < toVerify.length; i += 1) {
    if (toVerify[i] < 0 || toVerify[i] > 9) {
      existsZero = true;
      break;
    }
  }
  return existsZero;
}

function verifyLength(toVerify) {
  let lengthWrong = false;
  if (toVerify.length > 11 || toVerify.length < 11 || toVerify.length === 0) {
    lengthWrong = true;
  }
  return lengthWrong;
}

function generatePhoneNumber(arrayNumber) {
  // meu código aqui
  let toReturn;
  if (verifyLength(arrayNumber)) {
    toReturn = 'Array com tamanho incorreto.';
  } else if (verifycaOccurr(arrayNumber) || verifyNum(arrayNumber)) {
    toReturn = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let numJoin = arrayNumber.join('');
    toReturn = `(${numJoin.slice(0, 2)}) ${numJoin.slice(2, 7)}-${numJoin.slice(7)}`;
  }
  return toReturn;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // meu código aqui
  let toReturn;
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    toReturn = true;
  } else {
    toReturn = false;
  }
  return toReturn;
}

// Desafio 13
function hydrate(toReplace) {
  // meu código aqui
  let toReturn;
  let toSum = (toReplace.replace(/\D/g, '')).split('');
  let result = 0;
  for (let i = 0; i < toSum.length; i += 1) {
    result += parseInt(toSum[i], 2);
  }
  if (result === 1) {
    toReturn = `${result} copo de água`;
  } else {
    toReturn = `${result} copos de água`;
  }
  return toReturn;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
