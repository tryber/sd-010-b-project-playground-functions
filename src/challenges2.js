// Desafio 10
function techList(arrayTech, name) {
  let objFinal = [];
  arrayTech.sort();
  if (arrayTech.length !== 0) {
    for (let index = 0; index < arrayTech.length; index += 1) {
      let obj = {
        tech: arrayTech[index],
        name: name
      };
      objFinal.push(obj);
    };
    return objFinal;
  };
  if (arrayTech.length == 0) {
    return 'Vazio!'
  };
};


// Desafio 11
function generatePhoneNumber(phoneNum) {
  let ddd = '';
  let fisrtPart = '';
  let secondPart = '';
  let obj = {};
  if (phoneNum.length !== 11) {
    return "Array com tamanho incorreto."
  };
  for (let index = 0; index < phoneNum.length; index += 1) {
    if (obj[phoneNum[index]] === undefined) {
      obj[phoneNum[index]] = 1;
    } else {
      obj[phoneNum[index]] += 1;
    };
    if (phoneNum[index] < 0 || phoneNum[index] > 9 || phoneNum[index] >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    };
    if (index <= 1) {
      ddd += phoneNum[index];
    } else if (index <= 6) {
      fisrtPart += phoneNum[index];
    } else {
      secondPart += phoneNum[index];
    };
  };
  return `(${ddd}) ${fisrtPart}-${secondPart}`
};

console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]))


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
