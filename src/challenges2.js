// Desafio 10
function techList(array, name) {
  let futureLearning = [];
  for (index in array.sort()) {
    let addFutureLearning = {};
    addFutureLearning.tech = array[index];
    addFutureLearning.name = name;
    futureLearning.push(addFutureLearning);
  }

  if (array.length === 0) {
    return 'Vazio!';
  }
  return futureLearning;
}

// Desafio 11
function generatePhoneNumber(array) {
  let arrayIn = array;
  if (arrayIn.length !== 11) {
    return "Array com tamanho incorreto."
  }

  const verifyCounterTo3 = counterTo3(arrayIn)
  console.log(verifyCounterTo3);

  for (let i = 0; i < arrayIn.length; i += 1) {
    if (arrayIn[i] < 0 || arrayIn[i] > 9 || verifyCounterTo3 === false)
      return "não é possível gerar um número de telefone com esses valores";
  }

  function counterTo3(param) {
    let arrayIn2 = param
    let counter = 0;
    for (i = 0; i < arrayIn2.length; i += 1) {
      let doesItRepeat = arrayIn2[i];
      for (j = 0; j < arrayIn2.length; j += 1) {
        if (doesItRepeat === arrayIn2[j]) {
          counter += 1;
        }
      }
      if (counter >= 3) {
        return false
      } else {
        counter = 0
      }
    }
    if (counter === 0) {
      return true
    }
  }
}

function generateCorrectString() {
  let correctString = '(';

}

generatePhoneNumber([1, 2, 3, 4, 9, 6, 7, 8, 9, 9, 0]);

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
