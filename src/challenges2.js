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
function generatePhoneNumber() {
  let numberTel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
  let codeError = 0;

  if (numberTel.length != 11) {
    codeError = 1;
  }

  let formatedNumber = '';
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
      codeError = 2;
    }
  }

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
  if (codeError === 0) {
    console.log(formatedNumber);
  } else if (codeError === 1) {
    console.log("Array com tamanho incorreto.")
  } else if (codeError === 2) {
    console.log("não é possível gerar um número de telefone com esses valores");
  } else if (codeError === 3) {
    console.log("não é possível gerar um número de telefone com esses valores");
  }
}

generatePhoneNumber();
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

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
