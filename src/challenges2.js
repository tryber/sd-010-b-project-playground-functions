// Desafio 10
function techList(techs, inputName) {
  let ordenedList = techs.sort();
  let resultList = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < ordenedList.length; index += 1) {
    resultList.push(list = {
      tech: techs[index],
      name: inputName,
    });
  }
  return resultList;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = '(';
  let repetitionCounter = 0;
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let numberCounter = 0;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index2] === numbers[index]) {
        numberCounter += 1;
      }
    }
    if (numberCounter > repetitionCounter) {
      repetitionCounter = numberCounter;
    }
  }
  if (repetitionCounter >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < 2; index += 1) {
    phoneNumber = phoneNumber + numbers[index];
  }
  phoneNumber = phoneNumber + ') ';
  for (let index = 2; index < 7; index += 1) {
    phoneNumber = phoneNumber + numbers[index];
  }
  phoneNumber = phoneNumber + '-';
  for (let index = 7; index < numbers.length; index += 1) {
    phoneNumber = phoneNumber + numbers[index];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } else {
    return false;
  }
}



// Desafio 13
function hydrate(drinking) {}



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
