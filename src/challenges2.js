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
  let verificaTamanho = 0;
  let auxIndex = 0;

  if (numberTel.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let indexVerTamanho = 0; indexVerTamanho < numberTel.length; indexVerTamanho += 1) {
      if (numberTel[indexVerTamanho] > 9 || numberTel[indexVerTamanho] < 0) {
        verificaTamanho = 1;
      }
    }

    if (verificaTamanho === 1) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      let formatedNumber = '';

      for (let indexCreateNumber = 0; indexCreateNumber < 15; indexCreateNumber++) {
        if (indexCreateNumber === 0) {
          formatedNumber += "(";
        } else if (indexCreateNumber === 3) {
          formatedNumber += ")";
        } else if (indexCreateNumber === 4) {
          formatedNumber += " ";
        } else if (indexCreateNumber === 10) {
          formatedNumber += "-";
        } else {
          formatedNumber += numberTel[auxIndex];
          auxIndex += 1;
        }
      }
      return formatedNumber;
    }
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
