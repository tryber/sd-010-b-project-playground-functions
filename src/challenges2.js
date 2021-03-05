// Desafio 10
function techList(NomeTech, name) {
  let sortName = NomeTech.sort();
  let arrInserted = [];

  if ((sortName.length === 0) || (sortName[0] === '') || (sortName[0] === ' ')) {
    return 'Vazio!';
  }

  for (let index = 0; index < sortName.length; index += 1) {
    let objectInserted = {};
    objectInserted.tech = sortName[index];
    objectInserted.name = name;
    arrInserted.push(objectInserted);
  }
  return arrInserted;
}

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// Desafio 11
function generatePhoneNumber(phoneNumbers) {
  let cont = 0;
  let maskGenerate = '(';
  if (phoneNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneNumbers.length; index += 1) {
    if (index === 2) {
      maskGenerate += `) ${phoneNumbers[index]}`;
    }
    if (index === 7) {
      maskGenerate += `-${phoneNumbers[index]}`;
    } else {
      maskGenerate += phoneNumbers[index];
    }
    if (phoneNumbers[index] < 0 || phoneNumbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let indexB = 0; indexB < phoneNumbers.length; indexB += 1) {
      if (phoneNumbers[index] === phoneNumbers[indexB]) {
        cont += 1;
      }
    }
    if (cont > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    cont = 0;
  }
  return maskGenerate;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC)
  && lineA > (Math.abs(lineB - lineC))
  && lineB < (lineA + lineC)
  && lineB > (Math.abs(lineA - lineC))
  && lineC < (lineB + lineA)
  && lineC > (Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}
// console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate(drink) {
  let regExp = /\d+/g;
  let result = drink.match(regExp);
  let sum = 0;
  let numberOfDrinks = result;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    sum += parseFloat(numberOfDrinks[index]);
  }
  if (sum <= 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
} // console.log(hydrate( "1 cachaça, 5 cervejas e 1 copo de vinho"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
