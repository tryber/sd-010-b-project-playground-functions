// Desafio 10
function techList(techs, inputName) {
  let ordenedList = techs.sort(); // Dica do colega Emerson Saturnino (turma 10 tribo B) de organizar o array antes de usá-lo. Transparência é um valor.
  let resultList = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < ordenedList.length; index += 1) {
    resultList.push({
      tech: techs[index],
      name: inputName,
    });
  }
  return resultList;
}

// Desafio 11

// Função auxiliar 0 - Funcao idêntica à criada no requisito 6 para verificar a repeticao de um numero em um array. (arquivo chanllenges.js)
function checkRepetition(anyNumber, arrayNumbers) {
  let counter = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === anyNumber) {
      counter += 1;
    }
  }
  return counter;
}

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
    if (checkRepetition(numbers[index], numbers) > repCounter) { // Função checkRepetition criada para resolver requisito 6. Verifica quantas vezes um número se repete no array.
      repCounter = checkRepetition(numbers[index], numbers);
    }
  }
  return repCounter;
}

// Função auxiliar 3 - Preenche os número no formado (xx) xxxxx-xxxx
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
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let validNumbers = checkNumbers(numbers);
  let counter = repetitionCounter(numbers);

  if (counter >= 3 || validNumbers === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let phoneNumber = fillWithNumbers(numbers);
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) { // Referência : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
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
