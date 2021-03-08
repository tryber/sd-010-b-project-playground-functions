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
    let objectList = {
      tech: arraylist[index],
      name: name,
    };
    objectArray.push(objectList);
  }
  return objectArray;
}

// Desafio 11
function generatePhoneNumber(phoneNumberArray) {
  if (phoneNumberArray.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let index = 0; index < phoneNumberArray.length; index += 1) {
    if ((phoneNumberArray[index] < 0) || (phoneNumberArray[index] > 9)) {
      return "não é possível gerar um número de telefone com esses valores2";
    }
  }

  for (let index1 = 0; index1 < phoneNumberArray.length; index1 += 1) {
    let repeatCounter = 0;
    for (let index2 = 1; index2 < phoneNumberArray.length; index2 += 1){
      if (phoneNumberArray[index1] === phoneNumberArray[index2]) {
        repeatCounter += 1;
      }

      if (repeatCounter === 3) {
        return "não é possível gerar um número de telefone com esses valores3";
      }
    }
  }

  return (`(${phoneNumberArray[0]}${phoneNumberArray[1]}) ${phoneNumberArray[2]}${phoneNumberArray[3]}${phoneNumberArray[4]}${phoneNumberArray[5]}${phoneNumberArray[6]}-${phoneNumberArray[7]}${phoneNumberArray[8]}${phoneNumberArray[9]}${phoneNumberArray[10]}`);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
