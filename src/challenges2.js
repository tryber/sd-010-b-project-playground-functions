// Desafio 10
function techList(techs, inputName) {
  let ordenedList = techs.sort();
  let resultList = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < ordenedList.length; index += 1) {
    resultList.push(list = {
      tech: techs[index],
      name: inputName,
    });
  }
  return resultList;
}

// Desafio 11

// Função auxiliar  1 - Verifica condicional dos números no array recebido.
function checkNumbers(numbers) {
  let output = '';
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      output = false;
    }
  }
  return output;
}

// Função auxiliar 2 - Verifica se há número repetidos e retorna o maior número de repetição
function repetitionCounter(numbers) {
  let repCounter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    let numberCounter = 0;

    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index2] === numbers[index]) {
        numberCounter += 1;
      }
    }
    if (numberCounter > repCounter) {
      repCounter = numberCounter;
    }
  }
  return repCounter;
}

// Função auxiliar 3 - Preenche os número no formado (xx) xxxxx-xxxx.
function fillWithNumbers(numbers) {
  let output = '(';
  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 2) {
      output += ') ';
    }
    if (index === 7) {
      output += '-';
    }
    output += numbers[index];
  }
  return output;
}

// Função principal
function generatePhoneNumber(numbers) {
  let validNumbers = checkNumbers(numbers);
  let counter = repetitionCounter(numbers);

  if (counter >= 3 || validNumbers === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let phoneNumber = fillWithNumbers(numbers);
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinking) {
  let regex = /\d+/g;
  let drinkingList = drinking;
  let alcoholCounter = drinkingList.match(regex);
  let waterCups = 0;
  for (let index = 0; index < alcoholCounter.length; index += 1) {
    waterCups += parseInt(alcoholCounter[index], 10);
  }
  if (waterCups === 1) {
    return `${waterCups} copo de água`;
  }
  return `${waterCups} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
