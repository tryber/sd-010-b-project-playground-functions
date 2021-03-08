// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    let objectTechs = [];
    techs.sort();
    for (let i = 0; i < techs.length; i += 1) {
      let obj = {
        tech: techs[i],
        name,
      };
      objectTechs.push(obj);
    }
    return objectTechs;
  }
  return 'Vazio!';
}

function numberValidates(phoneSorted) {
  let moreThanThree = 0;
  let currentNumber = phoneSorted[0];
  for (let i = 0; i < phoneSorted.length; i += 1) {
    if (phoneSorted[i] >= 0 && phoneSorted[i] <= 9 && moreThanThree < 3) {
      if (phoneSorted[i] !== currentNumber) {
        currentNumber = phoneSorted[i];
        moreThanThree = 1;
      } else {
        moreThanThree += 1;
      }
    } else {
      return false;
    }
  }
  return true;
}

// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length === 11) {
    let originalPhone = phone.join('');
    let isValid = numberValidates(phone.sort());
    if (isValid) {
      phone = originalPhone.split('');
      // https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
      phone.splice(0, 0, '(');
      phone.splice(3, 0, ') ');
      phone.splice(9, 0, '-');
      return phone.join('');
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}

// console.log(generatePhoneNumber([1, 2, 3, 3, 5, 6, 7, 8, 1, 0, 6]));
// Desafio 12
// function triangleCheck(lineA, lineB, lineC) {
//   if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA) {
//     if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
//       return true;
//     }
//   }
//   return false;
// }

function triangleCheck(lineA, lineB, lineC) {
  let a = ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC)));
  let b = ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC)));
  let c = ((lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB)));
  return a && b && c;
  // if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
  //   if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
  //     if ((lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB))) {
  //        return true;
  //     }
  //   }
  // }
  // return false;
}

// Desafio 13
function hydrate(drinks) {
  let numbers = drinks.match(/\d/g); // https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += parseInt(numbers[i], 10);
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
