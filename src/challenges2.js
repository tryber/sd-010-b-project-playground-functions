// Desafio 10
function techList(tecnologias, nome) {
  let array = [];
  if (tecnologias.length !== 0) {
    tecnologias = tecnologias.sort();
    for (let key in tecnologias) {
      array[key] = {
        tech: tecnologias[key],
        name: nome,
      };
    }
  } else {
    array = 'Vazio!';
  }
  return array;
}
// Desafio 11
function testaRepeticoes(phoneNumber) {
  let cont = 0;
  let isValid = true;
  for (let index = 0; index <= phoneNumber.length; index += 1) {
    cont = 0;
    if (phoneNumber[index] === phoneNumber[index - 1] && phoneNumber[index] === phoneNumber[index + 1]) {
      cont += 2;
    }
    if (cont >= 2) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

function generatePhoneNumber(phoneNumber) {
  let saida;
  if (phoneNumber.length === 11) {
    for (let key in phoneNumber) {
      if (phoneNumber[key] < 0 || phoneNumber[key] > 9 || testaRepeticoes(phoneNumber) === false) {
        saida = 'não é possível gerar um número de telefone com esses valores';
      } else {
        saida = `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
      }
    }
  } else {
    saida = "Array com tamanho incorreto."
  }
  return saida;
}
console.log(generatePhoneNumber([0, 0, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  istriangle = false;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    istriangle = true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    istriangle = true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    istriangle = true;
  }
  return istriangle;
}
console.log(triangleCheck(10, 10, 10));

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
