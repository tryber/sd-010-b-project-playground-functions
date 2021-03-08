// Desafio 10
function techList(techNames, nameList) {
  let listOrdered = [];
  let objectList = {
    tech: 'techNames',
    name: nameList,
  };
  objectList = techNames.sort();
  if (objectList.length === 0) {
    return 'Vazio!';
  }
    for (let key in objectList) {
      listOrdered.push({
        tech: objectList[key],
        name: nameList
      }) 
    }
    return listOrdered;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(sentence) {
  let reg = /\d+/g;
  let sum = 0;
  let arrayNumbers = sentence.match(reg);
  for (let result of arrayNumbers) {
    sum += result;   
  }
  return sum;
}

//console.log(hydrate('First number is 1, and a second number 5. Here is the last number 1.'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
