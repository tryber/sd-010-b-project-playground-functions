// Desafio 10
// Refatorei o código após ver um exemplo do Emerson Saturino em uma thread no slack
function techList(arrayList, name) {
  let organizedArray = [];
  if (arrayList.length == 0) {
    return 'Vazio!';
  } else {
    arrayList.sort();
    for (let index in arrayList) {
      organizedArray.push({
        tech: arrayList[index],
        name: name,
      })
    }
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
  } else {
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
function triangleCheck() {
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
