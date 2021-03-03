// Desafio 10
function techList(arrayList, nome) {
  let arrayVazio = 'Vazio!';
  if (arrayList.length <= 0) {
    return arrayVazio;
  }
  let arraySorted = arrayList.sort();
  let newArray = [];
  for (let index = 0; index < arraySorted.length; index += 1) {
    newArray[index] = {
      tech: arrayList[index],
      name: nome
    }
  }
  return newArray;
}
/* console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));
console.log(techList([],"Lucas")); */

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
