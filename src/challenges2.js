// Desafio 10
function techList(arr, name) {
  let obj = [];
  if (arr.length == 0) {
    return 'Vazio!';
  } else {

    for (let index = 0; index < arr.length; index += 1) {
      obj.tech = arr[index];
      obj.name = name;
    }
  }
  return obj;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"))

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
