// Desafio 10
function techList(array, name) {
  if (array.length == 0){
    return 'Vazio!';
  }

  let tecnologias = {
    tech: 'NomeTech',
    name: name
  };

  let resultado = [];
  array.sort();
  for (let i = 0; i < array.length; i++){
    resultado.push({'tech':array[i], 'name':name});
  }

  return resultado;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
