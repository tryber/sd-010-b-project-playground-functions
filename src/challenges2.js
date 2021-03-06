// Desafio 10
function techList(array, nameUser) {
  let messege = null;
  let arrayReturn = [];
  if (array.length === 0) {
    messege = 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      arrayReturn.push({ tech: array[index], name: nameUser });
    }

    messege = arrayReturn;
  }
  return messege;
}

/* console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas")) */

function setKeysWithZero(numbers) {
  let numQtd = {};
  for (let index = 0; index < numbers.length; index += 1) {
    numQtd[numbers[index]] = 0;
  }
  return numQtd;
}

function compareItemNumbers(number, key, numQtd) {
  if (number === key) {
    numQtd[key] += 1;
  }
  return numQtd;
}

function sumQtdNumbers(numbers) {
  let numQtd = setKeysWithZero(numbers);
  for (let i = 0; i < numbers.length; i += 1) {
    for (let key = 0; key < numQtd.length; key += 1) {
      compareItemNumbers(numbers[i], key, numQtd);
    }
  }
  return numQtd;
}

function tresVezesOuMais(numbers) {
  let numQtdToArray = [];
  let cont = 0;
  let numQtd = sumQtdNumbers(numbers);
  for (let key = 0; key < numQtd.length; key += 1) {
    numQtdToArray[cont += 1] = numQtd[key];
  }
  let messege = null;
  if (numQtdToArray.sort()[numQtdToArray.length - 1] >= 3) {
    messege = false;
  } else {
    messege = true;
  }
  return messege;
}

// Desafio 11
function verifyNumbersLessThenZeroAndBiggerThenNine(numbers) {
  let menorQueZero = false;
  let maiorQueNove = false;

  for (let index in numbers) {
    if (numbers[index] < 0) {
      menorQueZero = true;
    } else if (numbers[index] > 9) {
      maiorQueNove = true;
    }
  }
  return [menorQueZero, maiorQueNove];
}

function addMaskInPhoneNumber(numbers) {
  numbers.unshift('(');
  numbers.splice(3, 0, ')');
  numbers.splice(4, 0, ' ');
  numbers.splice(10, 0, '-');

  return numbers;
}

function generatePhoneNumber(numbers) {
  let maiorQueTresNumeros = false;
  let menorQueZeromaiorQueNove = verifyNumbersLessThenZeroAndBiggerThenNine(numbers);
  let menorQueZero = menorQueZeromaiorQueNove[0];
  let maiorQueNove = menorQueZeromaiorQueNove[1];
  if (tresVezesOuMais(numbers) == false) {
    maiorQueTresNumeros = true;
  }
  if (numbers.length != 11) {return 'Array com tamanho incorreto'
  } else if (maiorQueNove || menorQueZero || maiorQueTresNumeros) {
    return "não é possível gerar um número de telefone com esses valores"
  } else {
    let numbers = addMaskInPhoneNumber(numbers);
    stringNumber = '';
    for (let index in numbers) {
      stringNumber += numbers[index]
    }
    return stringNumber
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let messege = null;
  if (
    Math.abs(lineB + lineC) < lineA < lineB + lineC
    && Math.abs(lineA + lineC) < lineB < lineA + lineC
    && Math.abs(lineA + lineB) < lineC < lineA + lineB
  ) {
    messege = true;
  } else {
    messege = false;
  }
  return messege;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(frase) {
  let numbers = (frase.match(/\d+/g));

  let sum = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index], 10);
  }

  return `${sum} copos de água`;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
