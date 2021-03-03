// Desafio 10
function techList(array, name) {
  let listOfObjetcts = [];
  let arrayOrdenada = array.sort();
  if (array.length < 1) {
    listOfObjetcts = 'Vazio!';
  } else {
    for (let index = 0; index < arrayOrdenada.length; index += 1) {
      let object = {
        tech: arrayOrdenada[index],
        name: name,
      };
      listOfObjetcts.push(object);
    }
  }
  return listOfObjetcts;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
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
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    let appers = countNumberAppears(numbers, numbers[index2]);
    if (appers > 2 || numbers[index2] < 0 || numbers[index2] > 9) {
      feedback = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numbers.length != 11) {
    feedback = 'Array com tamanho incorreto.';
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
// A utilização da função replace() foi feita após consulta ao stackoverflow
// link: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
// A utilização da função parseInt() foi feita após consulta à W3Schools
// link:  https://www.w3schools.com/jsref/jsref_parseint.asp
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
