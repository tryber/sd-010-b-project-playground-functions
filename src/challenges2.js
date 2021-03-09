// Desafio 10
function techList(techArray, name) {
  if (techArray.length !== 0) {
    let techListArray = objectArrayGenerator(techArray.sort(), name);
    return techListArray;
  }
  return 'Vazio!';
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Breno'));

// Desafio 10 - Função extra
function objectArrayGenerator(arraylist, name) {
  let objectArray = [];
  for (let index = 0; index < arraylist.length; index += 1) {
    let objectList = { tech: arraylist[index], name: name };
    objectArray.push(objectList);
  }
  return objectArray;
}

// Desafio 11
function generatePhoneNumber(phNumArray) {
  if (phNumArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < phNumArray.length; index += 1) {
    if ((phNumArray[index] < 0) || (phNumArray[index] > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index1 = 0; index1 < phNumArray.length; index1 += 1) {
    let repeatCounter = 0;
    for (let index2 = 1; index2 < phNumArray.length; index2 += 1) {
      if (phNumArray[index1] === phNumArray[index2]) {
        repeatCounter += 1;
      }

      if (repeatCounter === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  return (`(${phNumArray[0]}${phNumArray[1]}) ${phNumArray[2]}${phNumArray[3]}${phNumArray[4]}${phNumArray[5]}${phNumArray[6]}-${phNumArray[7]}${phNumArray[8]}${phNumArray[9]}${phNumArray[10]}`);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > lineB + lineC) || (lineA < (Math.abs(lineB - lineC)))) {
    return false;
  } else if ((lineB > lineA + lineC) || (lineB < (Math.abs(lineA - lineC)))) {
    return false;
    } else if ((lineC > lineA + lineB) || (lineC < (Math.abs(lineA - lineB)))) {
      return false;
      } else {
        return true;
        }
}
console.log(triangleCheck(10, 14, 8) );

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
