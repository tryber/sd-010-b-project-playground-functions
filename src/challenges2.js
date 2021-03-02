// Desafio 10
function techList(array,name) {
  let futureLearning = [];
for (index in array.sort()) {
  let addFutureLearning = {}
  addFutureLearning.tech = array[index];
  addFutureLearning.name = name;
  futureLearning.push(addFutureLearning);
}

  if (array.length === 0){
    return "Vazio!";
  } else {
    return futureLearning;
  } 
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
