// Desafio 10
function techList(array, name) {
  let object = {
    tech:" ",
    name: " ",
  };
  for (key in array) {
    object.tech = array[key];
    object.name = name;
  }
  return object;
} 

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
