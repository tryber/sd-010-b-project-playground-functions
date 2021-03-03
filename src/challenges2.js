// Desafio 10
function techList(array, name) {
  let listOfObjetcts = [];
  if (array.length < 1) {
    listOfObjetcts = 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      let object = {
        tech: name,
        name: name,
      };
    }
  }
  return listOfObjetcts;
}

function countNumberAppears(array, value) {
  let n = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      n += 1;
    }
  }
  return n;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let feedback = '';
  for (let i = 0; i < numbers.length; i += 1) {
    switch (i) {
      case 0:
        feedback += '(';
        break;
      case 2:
        feedback += ') ';
        break;
      case 7:
        feedback += '-';
        break;
    }
    feedback += numbers[i];
  }
  if (numbers.length != 11) {
    feedback = 'Array com tamanho incorreto.';
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    let appers = countNumberAppears(numbers, numbers[index2]);
    if (appers > 2 || numbers[index2] < 0 || numbers[index2] > 9) {
      feedback = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return feedback;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = false;
  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineC - lineB)) ||
    (lineB < lineA + lineC && lineB > Math.abs(lineC - lineA)) ||
    (lineC < lineB + lineA && lineC > Math.abs(lineA - lineB))
  ) {
    check = true;
  }
  return check;
}

// Desafio 13
function hydrate(string) {
  let onlyNumbers = string.replace(/\D/g, '');
  let numbersSplited = onlyNumbers.split('');
  let sumOfTheNumbers = 0;
  for (let index = 0; index < numbersSplited.length; index += 1) {
    sumOfTheNumbers = sumOfTheNumbers + parseInt(numbersSplited[index]);
  }
  let feedback = ``;
  if (sumOfTheNumbers < 2) {
    feedback = `${sumOfTheNumbers} copo de água`;
  } else {
    feedback = `${sumOfTheNumbers} copos de água`;
  }
  return feedback;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
