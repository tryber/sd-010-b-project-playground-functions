// Desafio 10
function techList(tecnologias, nome) {
  let array = [];
  if (tecnologias.length !== 0) {
    tecnologias = tecnologias.sort();
    for (let key = 0; key < tecnologias.length; key += 1) {
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
  let isValid = true;
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let cont = 0;
    for (let indexDois = 0; indexDois < phoneNumber.length; indexDois += 1) {
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
  let num = phoneNumber;
  let saida;
  if (num.length === 11) {
    for (let index = 0; index < num.length; index += 1) {
      if (num[index] < 0 || num[index] > 9 || testaRepeticoes(num) === false) {
        saida = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        saida = `(${num[0]}${num[1]}) ${num[2]}${num[3]}${num[4]}${num[5]}${num[6]}-${num[7]}${num[8]}${num[9]}${num[10]}`;
      }
    }
  } else {
    saida = "Array com tamanho incorreto.";
  }
  return saida;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let istriangle = false;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    istriangle = true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    istriangle = true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    istriangle = true;
  }
  return istriangle;
}

// Desafio 13
function hydrate(frase) {
  let bebidas = frase.match(/\d+/g);
  let soma = 0;
  for (let key = 0; key < bebidas.length; key += 1) {
    soma += Number(bebidas[key]);
  }
  if (soma !== 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
