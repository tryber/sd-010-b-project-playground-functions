// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let sortArray = tech.sort();
  let finalArrayWithObjects = [];

  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    for (let index in sortArray) {
      finalArrayWithObjects.push({ tech: sortArray[index], name, });
    }
  }
  return finalArrayWithObjects;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let unformatedPhoneNumber = [];
  let countNumberOfTimes = 0;
  let parentisisNumber = '';
  let firstNumbers = '';
  let lastNumbers = '';
  const messageErrorOne = 'não é possível gerar um número de telefone com esses valores';

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let numbers in arrayNumbers) {
    let actualNumber = arrayNumbers[numbers];
    for (let compare in arrayNumbers) {
      if (actualNumber === arrayNumbers[compare]) {
        countNumberOfTimes += 1;
      }
    }
    if (countNumberOfTimes >= 3 || arrayNumbers[numbers] < 0 || arrayNumbers[numbers] > 9) {
      return messageErrorOne;
    } else {
      unformatedPhoneNumber.push(arrayNumbers[numbers]);
    }
    countNumberOfTimes = 0;
  }

  for (let format in unformatedPhoneNumber) {
    if (format < 2) {
      parentisisNumber += unformatedPhoneNumber[format];
    } else if (format >= 2 && format < 7) {
      firstNumbers += unformatedPhoneNumber[format];
    } else {
      lastNumbers += unformatedPhoneNumber[format];
    }
  }
  return '(' + parentisisNumber + ') ' + firstNumbers + '-' + lastNumbers;
}

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
  // seu código aqui
  let isTriangle = true;

  if (Math.abs(linhaA > (linhaB + linhaC) || linhaB > (linhaA + linhaC) || linhaC > (linhaA + linhaB))) {
    isTriangle = false;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(stringReceived) {
  // seu código aqui
  // Para retornar todos os numeros da string, consoante o sugerido no exercício, pesquisei por expressões regulares para extrair números de uma string e usei o método explicado no seguinte link "https://www.encodedna.com/javascript/how-to-get-numbers-from-a-string-in-javascript.htm":
  let extractNumbers = stringReceived.match(/\d+/g);
  let calculateHydratation = 0;
  let hydrateMessage = '';

  for (let calculate in extractNumbers) {
    calculateHydratation += parseInt(extractNumbers[calculate]);
  }

  if (calculateHydratation > 1) {
    hydrateMessage = ' copos de água';
  } else {
    hydrateMessage = ' copo de água';
  }
  return calculateHydratation + hydrateMessage;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
