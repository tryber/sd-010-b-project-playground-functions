// Desafio 10
function techList(array, name) {
  let help = [];
  if (array.length === 0) {
    help = 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      let techDesired = {
        tech: '',
        name: name
      };
      techDesired.tech = array[i];
      help.push(techDesired);
    }
  }
  return help;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Junior'));

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
