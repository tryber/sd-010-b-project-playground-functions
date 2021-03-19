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

  // verificações
  const verifyCounterTo3 = counterTo3(arrayIn);

  if (arrayIn.length !== 11) {
    return "Array com tamanho incorreto."
  }

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

  let correctString = generateCorrectString(arrayIn);

  function generateCorrectString(param) {
    let arrayIn3 = param;
    let stringArray = [];
    for (let i = 0; i < arrayIn3.length; i += 1) {
      stringArray.push(String(arrayIn3[i]));
    }
    stringArray.splice(0, 0, '(')
    stringArray.splice(3, 0, ')')
    stringArray.splice(4, 0, ' ')
    stringArray.splice(10, 0, '-')

    let finishedString = '';
    for (let i = 0; i < stringArray.length; i += 1) {
      finishedString += stringArray[i];
    }
    return finishedString;
  }
  return correctString;
}
generatePhoneNumber([9, 2, 4, 3, 3, 3, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(a, b, c) {
  const aIn = Math.abs(a);
  const bIn = Math.abs(b);
  const cIn = Math.abs(c);
    if (aIn > bIn + cIn || bIn > aIn + cIn || cIn > aIn + bIn) {
      return false;
    } else if (aIn < bIn - cIn || bIn < aIn - cIn || cIn < aIn - bIn) {
      return false
    } else {
      return true
    }
  }

// Desafio 13
function hydrate(string) {
  const stringIn = string;
  let numberSum = 0;
  for (let i = 0; i < stringIn.length; i += 1) {
    if (parseInt(stringIn[i])) {
      numberSum += parseInt(stringIn[i]); 
    }
  }
  const stringSum = String(numberSum);
   if (numberSum === 1) {
     return `${stringSum} copo de água`;
   } else {
     return  `${stringSum} copos de água`
   }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
