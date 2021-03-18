// Desafio 10
function techList(techno, name) {
  let newArray = [];
  techno.sort();

  if (techno.length === 0) {
    return "Vazio!";
  } else {
    for (let index = 0; index < techno.length; index += 1) {
      let nome = name;
      let objList = {
        tech: techno[index],
        name: nome
      }
      newArray.push(objList);
    }
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(numberTel) {
  let codeError = 0;
  let formatedNumber = '';

  if (numberTel.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    let indexNumberTel = 0;
    for (let index = 0; index < 15; index += 1) {
      if (index === 0) {
        formatedNumber += "(";
      } else if (index === 3) {
        formatedNumber += ")";
      } else if (index === 4) {
        formatedNumber += " ";
      } else if (index === 10) {
        formatedNumber += "-";
      } else {
        formatedNumber += numberTel[indexNumberTel];
        indexNumberTel += 1;
      }
    }

    for (let index = 0; index < numberTel.length; index += 1) {
      if (numberTel[index] > 9 || numberTel[index] < 0) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }

    if (codeError == 0) {
      numberTel.sort();
      let numberArmazenado;
      let contXnumber = 0;
      for (let index = 0; index < numberTel.length; index += 1) {
        if (index === 0) {
          numberArmazenado = numberTel[index];
          contXnumber = 1;
        } else {
          if (numberTel[index] === numberArmazenado) {
            contXnumber += 1;
          } else {
            numberArmazenado = numberTel[index];
            contXnumber = 1;
          }

          if (contXnumber >= 3) {
            codeError = 3;
          }
        }
      }

      if (codeError == 0) {
        return formatedNumber;
      } else {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let retorno = true;
  let subAbsolute = lineA - lineB - lineC;

  Math.abs(subAbsolute);

  if (lineA > (lineB + lineC)){
    retorno = false;
    return retorno;
  } else if (lineB > (lineA + lineC)) {
    retorno = false;
    return retorno;
  } else if (lineC > (lineA + lineB)) {
    retorno = false;
    return retorno;
  } else {
    if (lineA < subAbsolute) {
      retorno = false;
    return retorno;
    } else if (lineB < subAbsolute) {
      retorno = false;
    return retorno;
    } else if (lineC < subAbsolute) {
      retorno = false;
    return retorno;
    } else {
      return retorno;
    }
  }
}

// Desafio 13
function hydrate() {
  let frase = "1 cachaça, 5 cervejas e 1 copo de vinho";
  let sum = 0;

  let teste = frase.match(/\d+/g).map(Number);

  for (let index = 0; index < teste.length; index += 1) {
    sum += teste[index];

  }
  return (sum + " copos de água");
}

hydrate();
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
