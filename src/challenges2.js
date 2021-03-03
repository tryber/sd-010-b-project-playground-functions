// Desafio 10
function techList(array, name) {
  let listOfObjetcts = [];
  if (array.length < 1) {
    listOfObjetcts = 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      let object = {};
      object.tech = `${array[index]}`;
      object.name = name;
      listOfObjetcts.push(object);
    }
  }
  return listOfObjetcts;
}

function countNumberAppears(array, value) {
  let n = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      n += 1;
    }
  }
  return n;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let feedback = '';
  for (let i = 0; i < numbers.length; i += 1) {
    switch (i) {
      case 0:
        feedback += '(';
        break;
      case 2:
        feedback += ') ';
        break;
      case 7:
        feedback += '-';
        break;
    }
    feedback += numbers[i];
  }
  if (numbers.length != 11) {
    feedback = 'Array com tamanho incorreto.';
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    let appers = countNumberAppears(numbers, numbers[index2]);
    if (appers > 2 || numbers[index2] < 0 || numbers[index2] > 9) {
      feedback = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return feedback;
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
