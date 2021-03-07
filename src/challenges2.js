// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    let objectTechs = [];
    techs.sort();
    for (let i = 0; i < techs.length; i++) {
      let obj = {};
      obj.tech = techs[i];
      obj.name = name;
      objectTechs.push(obj);
    }
    return objectTechs;
  } else {
    return 'Vazio!';
  }
  
}

// Desafio 11
function generatePhoneNumber(phone) {
  let originalPhone = phone.join('');
  if (phone.length == 11) {
    let isValid = true;
    let moreThanThree = 0;
    let phoneSorted = phone.sort();
    console.log(phoneSorted);
    let currentNumber = phoneSorted[0];
    for (let i = 0; i < phoneSorted.length; i++) {
      if (phoneSorted[i] != currentNumber) {
        currentNumber = phoneSorted[i];
        moreThanThree = 1;
      } else {
        moreThanThree++;
      }
      if (phoneSorted[i] < 0 || phoneSorted[i] > 9 || moreThanThree > 3) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      phoneSorted = originalPhone.split('');
      // https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
      phoneSorted.splice(0, 0, '(');
      phoneSorted.splice(3, 0, ') ');
      phoneSorted.splice(9, 0, '-');
      return phoneSorted.join("");
    } else {
      return 'não é possível gerar um número de telefone com esses valores.';
    }
  } else {
    return "Array com tamanho incorreto.";
  }
}
// console.log(generatePhoneNumber([1, 2, 3, 6, 5, 6, 7, 8, 1, 0, 6]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let numbers = drinks.match(/\d/g); // https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  if (sum > 1) {
    return sum + " copos de água";
  } else {
    return sum + " copo de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
