// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let listTech = [];
  if (technologies.length === 0) {
    return 'Vazio!';
  } else {
    technologies.sort();
    for (let index = 0; index < technologies.length; index += 1) {
      listTech[index] = {
        tech: technologies[index],
        name: name
      };
    }
  }
  return listTech;
}

// Desafio 11

function arrayLength (array) {
  if (array.length !== 11) {
    return false;
  } else {
    return true;
  }
}

function arrayRange (array) {
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] < 0) || (array[index] > 9)) {
      return false;
    } 
  }
  return true;
}

function arrayCount (array) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let internIndex = 0; internIndex < array.length; internIndex += 1) {
      if (array[index] === array[internIndex]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return false;
    } 
    count = 0;
  }
  return true;
}

function generatePhoneNumber(array) {
  // seu código aqui
  let validNumber = '(xx) xxxxx-xxxx';

  if (arrayLength(array) === false) {
    return 'Array com tamanho incorreto.';
  } else if (arrayRange(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (arrayCount(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    array.forEach(element => {
      validNumber = validNumber.replace('x', element);
    });
  }
  return validNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) &&
  ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) &&
  ((lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB)))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
