// Desafio 10
// Refatorei o código após ver um exemplo do Emerson Saturino em uma thread no slack
function techList(arrayList, name) {
  let organizedArray = [];
  if (arrayList.length === 0) {
    return 'Vazio!';
  }
  arrayList.sort();
  for (let index = 0; index < arrayList.length; index += 1) {
    organizedArray.push({
      tech: arrayList[index],
      name,
    });
  }
  return organizedArray;
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let countRepeatNumbers = 0;
  let verifyRepeatNumbers = false;
  let auxiliarString = '';
  let aux = 0;

  if (arrayNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in arrayNumber) {
    for (let secondIndex in arrayNumber) {
      if (arrayNumber[index] === arrayNumber[secondIndex]) {
        countRepeatNumbers += 1;
      }
    }
    if (countRepeatNumbers >= 3) {
      verifyRepeatNumbers = true;
      countRepeatNumbers = 0;
    } else {
      countRepeatNumbers = 0;
    }
  }
  for (let index in arrayNumber) {
    if (arrayNumber[index] < 0 || arrayNumber[index] > 9 || verifyRepeatNumbers == true) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let index = 0; index < (arrayNumber.length + 3); index += 1) {
    if (index == 0) {
      auxiliarString = auxiliarString + '(';
    } else if (index == 3) {
      auxiliarString = auxiliarString + ') ';
    } else if (index == 9) {
      auxiliarString = auxiliarString + '-';
    } else {
      auxiliarString = auxiliarString + arrayNumber[aux];
      aux += 1;
    }
  }
  return auxiliarString;
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absAB = Math.abs(lineA - lineB);
  let absBC = Math.abs(lineB - lineC);
  let absAC = Math.abs(lineA - lineC);
  let sumAB = lineA + lineB;
  let sumBC = lineB + lineC;
  let sumAC = lineA + lineC;
  if (absAB < lineC && lineC < sumAB && absBC < lineA && lineA < sumBC && absAC < lineB && lineB < sumAC) {
    return true;
  } else {
    return false;
  }
}
triangleCheck(10, 14, 8);

// Desafio 13
// Feito com ajuda do site: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-147.php

function hydrate(string) {
  let count = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (/[0-9]/.test(string[index])) {
      count += parseInt(string[index], 10);
    }
  }
  if (count === 1) {
    return `${count } copo de água`;
  }
  return `${count} copos de água`;
}

hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
