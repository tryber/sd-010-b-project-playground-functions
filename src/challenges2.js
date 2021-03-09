// Desafio 10
function techList(array, name) {
  if (array != null) {
    array.sort();
    let techs = [''];
    for (let i = 0; i < array.length; i += 1) {
      techs[i] = {
        tech: array[i],
        name: name
      };
    }
    return techs;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(number) {
  let returnMsg;
  if (number.length !== 11) {
    returnMsg = 'Array com tamanho incorreto.';
  } else {
    let numberTimes;
    let controlNumber;
    let possibleNumber = true;
    for (let index = 0; index < number.length; index += 1) {
      if ((number[index] < 0) || (number[index] > 9)) {
        possibleNumber = false;
        break;
      } else {
        numberTimes = 0;
        controlNumber = number[index];
        for (let index2 = 0; index2 < number.length; index2 += 1) {
          if (number[index2] === controlNumber) {
            numberTimes += 1;
          }
        }
        if (numberTimes > 2) {
          possibleNumber = false;
          break;
        }
      }
    }
    if (possibleNumber !== false) {
      returnMsg = '(' + number[0] + number[1] + ')' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10];
    } else {
      returnMsg = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return returnMsg;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let trueOrFalse;
  if ((lineA > (lineB + lineC)) || (lineB > (lineA + lineC)) || (lineC > (lineA + lineB))
    || (lineA < Math.abs(lineB - lineC)) || (lineB < Math.abs(lineA - lineC))
    || (lineC < Math.abs(lineA - lineB))) { trueOrFalse = false; }
  else { trueOrFalse = true; }
  return trueOrFalse;
}

// Desafio 13
function hydrate(string) {
  let drinks = string.replace(/\D/g, '');
  let water = 0;
  for (let i = 0; i < drinks.length; i += 1) {
    water += parseInt(drinks[i], 10);
  }
  return (water + ' copos de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
