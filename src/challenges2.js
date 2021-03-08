function printArray(array) {
  for (let i = 0; i < array.length; i += 1) { console.log(Object.values(array[i])); }
  for (let i = 0; i < array.length; i += 1) { console.log(Object.keys(array[i])); }
}

// Desafio 10
function techList(array, name) {
  let list = {}; let ordened = ['']; let response = [];

  if (array.length > 0) {
    console.log(`[Requisito 10] - Array Original: ${array}`);
    ordened = array.sort();
    console.log(`[Requisito 10] - Array Ordenado: ${ordened}`);

    for (let i = 0; i < ordened.length; i += 1) {
      list = {};
      list.tech = ordened[i]; list.name = name;
      response[i] = list;
    }

    printArray(response);
  } else { response = 'Vazio!'; console.log(`Resposta: ${response}`); }

  return response;
}
// Funções auxiliares do [Requisito 10]
function verifySize(array) {
  let response = array.length !== 11 ? 'Array com tamanho incorreto.' : 'ok';
  return response;
}

function verifyValues(array) {
  let response;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      response = 'não é possível gerar um número de telefone com esses valores';
    } else { response = 'ok'; }
  }
  return response;
}

function counterRepetitions(value1, value2) {
  let counter = 0;
  if (value1 === value2) { counter += 1; }
  return counter;
}

function repetitionString(value) {
  let response;
  if (value > 3) {
    response = 'não é possível gerar um número de telefone com esses valores';
  } else { response = 'ok'; }
  return response;
}

function verifyRepititions(array) {
  let counter = 0; let response;

  for (let i = 0; i < array.length; i += 1) {
    counter = 0;
    for (let j = 0; j < array.length; j += 1) {
      counter += counterRepetitions(array[i], array[j]);
    }
    // console.log(`Repetições: ${counter}`);
  }
  response = repetitionString(counter);

  return response;
}

function presetNumber(value) {
  let response;
  switch (value) {
  case 0: response = '('; break;
  case 3: response = ')'; break;
  case 9: response = '-'; break;
  default: response = 'value'; break;
  }
  return response;
}

function generatePart1(array) {
  let preset; let response = '';
  for (let i = 0; i < 4; i += 1) {
    preset = presetNumber(i);
    response += preset === 'value' ? array[i - 1] : preset;
  }
  return response;
}

function generatePart2(array) {
  let preset; let response = '';
  for (let i = 4; i < 10; i += 1) {
    preset = presetNumber(i);
    response += preset === 'value' ? array[i - 2] : preset;
  }
  return response;
}

function generatePart3(array) {
  let preset; let response = '';
  for (let i = 10; i < 14; i += 1) {
    preset = presetNumber(i);
    response += preset === 'value' ? array[i - 3] : preset;
  }
  return response;
}

function generateResponse(size, values, repetition) {
  if (size !== 'ok') { return size; }
  if (values !== 'ok') { return values; }
  if (repetition !== 'ok') { return repetition; }
}

// Desafio 11
function generatePhoneNumber(array) {
  let verifysize = verifySize(array); let verifyvalues = verifyValues(array);
  let verifyrepetition = verifyRepititions(array); let response = '';

  if (verifysize === 'ok' && verifyvalues === 'ok' && verifyrepetition === 'ok') {
    response = generatePart1(array);
    response += generatePart2(array);
    response += generatePart3(array);
    console.log(`Número gerado: ${response}`);
  } else {
    console.log(`Tamanho do Array: ${verifysize}`);
    console.log(`Valores do Array: ${verifyvalues}`);
    console.log(`Repetições no Array: ${verifyrepetition}`);
    response = generateResponse(verifysize, verifyvalues, verifyrepetition);
    console.log(`Response Final: ${response}`);
  }

  return response;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

let tech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// let vazio = [];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 9];

techList(tech, 'João');
generatePhoneNumber(numbers);

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
