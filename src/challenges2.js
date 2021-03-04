/* eslint-disable valid-typeof */
/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
// Desafio 10
function techList(tech, name) {
  let objectListOutput = [];
  let object = {
    tech,
    name,
  };
  let ordenadedList = object.tech.sort();
  for (let key in ordenadedList) {
    objectListOutput.push({
      tech: ordenadedList[key],
      name,
    });
  }
  if (object.tech.length > 0) {
    return objectListOutput;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayOfNumber) {
  let telePhoneNumber = '(';
  for (let DDD = 0; DDD < 2; DDD += 1) {
    telePhoneNumber += arrayOfNumber[DDD];
  }
  telePhoneNumber += ') ';
  for (let first5Numbers = 2; first5Numbers < 7; first5Numbers += 1) {
    telePhoneNumber += arrayOfNumber[first5Numbers];
  }
  telePhoneNumber += '-';
  for (let last4Numbers = 7; last4Numbers < 11; last4Numbers += 1) {
    telePhoneNumber += arrayOfNumber[last4Numbers];
  }
  let repeated = 0;
  let numberCounter = 0;
  let numindex = 0;
  for (let key in arrayOfNumber) {
    let verifyNumber = arrayOfNumber[key];
    for (let key2 in arrayOfNumber) {
      if (verifyNumber === arrayOfNumber[key2]) {
        numberCounter += 1;
      }
    }
    if (numberCounter > repeated) {
      repeated = numberCounter;
      numindex = key;
    }
    numberCounter = 0;
  }
  let verifyNumberPossibility = 0;
  let verifyNumerOk = 0;
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (((arrayOfNumber[index]) < 0) || ((arrayOfNumber[index]) > 9) || (repeated >= 3)) {
      verifyNumberPossibility += 1;
    } else if ((arrayOfNumber[index] >= 0) && (arrayOfNumber[index] <= 9) && (arrayOfNumber.length === 11)) {
      verifyNumerOk += 1;
    }
    if (verifyNumerOk === 11) {
      return telePhoneNumber;
    } if (verifyNumberPossibility > 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } if ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))) {
    return true;
  } if ((lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}

// Desafio 13  ==>>>>> Nao terminei essa ainda!!! Voltar nela!!! <<<<<<==
function hydrate(stringWithGlasses) {
  let retorno = '';
  let sumOfGlasses = 0;
  for (let key in stringWithGlasses) {
    if (typeof (stringWithGlasses[key]) === Number) {
      sumOfGlasses += stringWithGlasses[key];
    }
  }
  retorno = `${sumOfGlasses} copos de água`;
  return retorno;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
