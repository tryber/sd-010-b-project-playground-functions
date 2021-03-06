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
  let telePhoneNumber = `(${arrayOfNumber[0]}${arrayOfNumber[1]}) ${arrayOfNumber[2]}${arrayOfNumber[3]}${arrayOfNumber[4]}${arrayOfNumber[5]}${arrayOfNumber[6]}-${arrayOfNumber[7]}${arrayOfNumber[8]}${arrayOfNumber[9]}${arrayOfNumber[10]}`; // Restruturei essa parte do código baseado no código do colega Robson Cardozo (Apenas olhei por alto! =])
  if (arrayOfNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (arrayOfNumber.length === 11) {
    let repeated = 0;
    let numberCounter = 0;
    for (let key in arrayOfNumber) {
      let verifyNumber = arrayOfNumber[key];
      for (let key2 in arrayOfNumber) {
        if (verifyNumber === arrayOfNumber[key2]) {
          numberCounter += 1;
        }
      }
      if (numberCounter > repeated) {
        repeated = numberCounter;
      }
      numberCounter = 0;
    }
    let verifyNumberPossibilitty = 0;
    for (let key3 in arrayOfNumber) {
      if ((arrayOfNumber[key3] > 9) || (arrayOfNumber[key3] < 0) || (repeated >= 3)) {
        verifyNumberPossibilitty += 1;
      }
    }
    if (verifyNumberPossibilitty > 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      return telePhoneNumber;
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

// Desafio 13 // Busquei sobre essa questão no link: https://www.youtube.com/watch?v=pfkkdzeyx6U
function hydrate(stringWithGlasses) {
  let getNumber = /\d+/g;
  let arrayWithNumbers = stringWithGlasses.match(getNumber);
  let sumOfGlasses = 0;
  for (let key in arrayWithNumbers) {
    if (arrayWithNumbers.length > 0) {
      sumOfGlasses += parseInt(arrayWithNumbers[key], 10); // Vi sobre o parseInt na aula ao vivo de hoje (5.3)
    }
  }
  if (arrayWithNumbers.length === 1) {
    return `${sumOfGlasses} copo de água`;
  } else {
    return `${sumOfGlasses} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
