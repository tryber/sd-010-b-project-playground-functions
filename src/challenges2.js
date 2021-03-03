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
    for (let indexDois = 0; indexDois <= phoneNumber.length; indexDois += 1) {
      if (phoneNumber[index] === phoneNumber[indexDois]) {
        cont += 1;
      }
      if (cont > 2) {
        isValid = false;
        break;
      }
    }
  }
  return isValid;
}

function generatePhoneNumber(phoneNumber) {
  let saida;
  if (phoneNumber.length === 11) {
    for (let index = 0; index <= phoneNumber.length; index += 1) {
      if (phoneNumber[index] < 0 || phoneNumber[index] > 9 || testaRepeticoes(phoneNumber) === false) {
        saida = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        saida = `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
      }
    }
  } else {
    saida = "Array com tamanho incorreto."
  }
  return saida;
}
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]));

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
function hydrate(frase) {
  let bebidas = frase.match(/\d+/g);
  let soma = 0;
  for (let key in bebidas) {
    soma += parseInt(bebidas[key]);
  }
  if (soma !== 1) {
    return `${soma} copos de água`;
  } else {
    return `${soma} copo de água`;
  }
}
console.log(hydrate("5 cerveja"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
