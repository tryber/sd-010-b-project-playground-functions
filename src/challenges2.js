// Desafio 10
function techList(array, nameUser) {
  array.sort();
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
"Lucas")); */

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

function attributeNumberInStringNumber(numbers) {
  let stringNumber = '';
  for (let index = 0; index < numbers.length; index += 1) {
    stringNumber += numbers[index];
  }
  return stringNumber;
}

function quantasVezesONumeroApareceNoArray(number, numbers) {
  let cont = 0;
  for (let n = 0; n < numbers.length; n += 1) {
    if (number === numbers[n]) {
      cont += 1;
    }
  }
  return cont;
}

function maiorRepeticao(relNumQtd) {
  let numberMore = 0;
  for (let key in relNumQtd) {
    if (relNumQtd[key] > numberMore) {
      numberMore = relNumQtd[key];
    }
  }
  let messege = null;
  if (numberMore >= 3) {
    messege = true;
  } else {
    messege = false;
  }
  return messege;
}

function tresVezesOuMais(numbers) {
  let relNumQtd = {}; let qtd = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    qtd = quantasVezesONumeroApareceNoArray(numbers[index], numbers);
    relNumQtd[numbers[index]] = qtd;
  }
  return maiorRepeticao(relNumQtd);
}
/* console.log(tresVezesOuMais([1, 1, 1, 2])); */

function generatePhoneNumber(numbers) {
  let menorQueZeromaiorQueNove = verifyNumbersLessThenZeroAndBiggerThenNine(numbers);
  let menorQueZero = menorQueZeromaiorQueNove[0];
  let maiorQueNove = menorQueZeromaiorQueNove[1];
  let messege = null;
  if (numbers.length !== 11) {
    messege = 'Array com tamanho incorreto.';
  } else if (maiorQueNove || menorQueZero || tresVezesOuMais(numbers)) {
    messege = 'não é possível gerar um número de telefone com esses valores';
  } else {
    numbers = addMaskInPhoneNumber(numbers);
    messege = attributeNumberInStringNumber(numbers);
  }
  return messege;
}
/* console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); */
// Desafio 12
/* REFERENCIA: https://mundoeducacao.uol.com.br/matematica/condicao-existencia-um-triangulo.htm */
const validateSidesTriangle = (line1, line2, line3) => Math.abs(line2 - line3) < line1 
&& line2 + line3 > line1;
function triangleCheck(lineA, lineB, lineC) {
  let messege = null;
  if (validateSidesTriangle(lineA, lineB, lineC)
  && validateSidesTriangle(lineB, lineA, lineC)
  && validateSidesTriangle(lineC, lineA, lineB)
  ) {
    messege = true;
  } else {
    messege = false;
  }
  return messege;
}
/* console.log(triangleCheck(10, 14, 8)); */

// Desafio 13
function hydrate(frase) {
  let messege = null;
  let numbers = (frase.match(/\d+/g));

  let sum = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index], 10);
  }
  
  messege = sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
  return messege;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
