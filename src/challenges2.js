// Desafio 10
function techList(array, name) {
  // seu código aqui
  let resultado = [];
  array= array.sort();
  if(array == 0){
    return 'Vazio!'
  }
  for(let index in array){
    
    resultado.push({'tech': array[index], 'name': name});
  }
  return resultado;
}//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

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
