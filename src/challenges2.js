function printArray(array) {
  for (let i = 0; i < array.length; i += 1) { console.log(Object.values(array[i])); }
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

let tech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// let vazio = [];
techList(tech, 'João');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
