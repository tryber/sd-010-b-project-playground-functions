// Requisito 10 - Receber um array de tecnologias e nomes para criar um novo array com objetos possuindo campos tech e name.
//    - Ordenar novo array a partir do campo tech
//    - Se array vazio retornar 'Vazio!'
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  array = array.sort();
  let list = [];
  for (const tech in array) {
    list.push({ tech: array[tech], name });
  }
  return list;
}
console.log(
  techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Gustavo')
); // -> [{ tech: 'CSS', name: 'Gustavo' },{ tech: 'HTML', name: 'Gustavo' },{ tech: 'JavaScript', name: 'Gustavo' },{ tech: 'Jest', name: Gustavo' },{ tech: 'React', name: 'Gustavo' }]
console.log(techList([], 'Gustavo')); // -> 'Vazio!'

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
