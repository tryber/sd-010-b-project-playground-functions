// Desafio 10
function techList(array, name) {
  let arraySort = array.sort();
  let arrayObject = [];
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      arrayObject.push({ tech: arraySort[index], name: name });
    }
  } else {
    return 'Vazio!';
  }
  return arrayObject;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index1 = 0; index1 < array.length; index1 += 1) {
      if (array[index] === array[index1]) {
        count += 1;
      }
    }
    if (count < 3) {
      count = 0;
    } else {
      break;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
 if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
   return true;
 } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
   return true;
 } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
   return true;
 } else {
   return false;
 }
}

// Desafio 13
function hydrate(string) {
  let onlyNumbers = /\d+/g;
  let array = string.match(onlyNumbers);
  let count = 0;
  for (index = 0; index < array.length; index += 1) {
    count += parseInt(array[index]);
  }
  if (count === 1) {
    return `${count} copo de água`;
  } else {
    return `${count} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};