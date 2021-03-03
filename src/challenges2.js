// Desafio 10
function techList(arrayList, nome) {
  let arrayVazio = "Vazio!";
  let newArray = [];

  if (arrayList.length <= 0) {
    return arrayVazio;
  }

  for (let index = 0; index < arrayList.length; index += 1) {
    newArray[index] = {
      tech: arrayList[index],
      name: nome
    }
  }
  let arraySorted = newArray.sort();
  return arraySorted;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

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
