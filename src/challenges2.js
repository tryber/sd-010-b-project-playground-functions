// Desafio 10
function techList(array, name) {
  let objArray = [];
  let objOrder = array.sort();
  if (array.length === 0) {
    objArray = 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      objArray.push({
        tech: objOrder[index],
        name: name,
      });
    }
  }
  return objArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    let numerosIguais = 0;
    for (let indexIgual = 0; indexIgual < array.length; indexIgual += 1) {
      if (array[index] === array[indexIgual]) {
        numerosIguais += 1;
        if (numerosIguais > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  if (Math.min(...array) < 0 || Math.max(...array) > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((Math.abs(lineB) - Math.abs(lineC) < lineA < Math.abs(lineB) + Math.abs(lineC)) && (Math.abs(lineA) - Math.abs(lineC) < lineB < Math.abs(lineA + lineC)) && (Math.abs(lineA) - Math.abs(lineB) < lineC < Math.abs(lineA) + Math.abs(lineB))) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(16, 9, 2));
let a = 5;
let b = -5;
console.log(Math.abs(a) + Math.abs(b));

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
