// Desafio 10
function techList(techs, name) {
  let ordenedList = techs.sort();
  let resultList = [];
  for (let index = 0; index < ordenedList.length; index += 1) {
    resultList.push(list = {
      tech: techs[index],
      name: name,
    })
  }
  return resultList;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  phoneNumber = '(';
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let index = 0; index < 2; index += 1) {
      phoneNumber = phoneNumber + numbers[index];
    }
    phoneNumber =phoneNumber + ')';
    for (let index = 2; index < 7; index += 1) {
      phoneNumber = phoneNumber + numbers [index];
    }
    phoneNumber =phoneNumber + '-'; 
    for (let index = 7; index < numbers.length; index += 1) {
      phoneNumber = phoneNumber + numbers [index];
    }
  }
  return phoneNumber;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1 ]));
















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
