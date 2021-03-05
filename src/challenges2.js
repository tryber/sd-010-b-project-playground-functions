// Desafio 10
function techList(array,name) {
  let tech = [];

  if (ListaTech.length == 0) {
    return 'Vazio!';

  } else {
    for (let index = 0; index <= ListaTech.length - 1; index += 1) {
      tech[index] = {
        tech: ListaTech[index],
        name: name
      }
    }
  
  }
  return tech;
}
let ListaTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Lucas';
console.log(techList(ListaTech, name));

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
