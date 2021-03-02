// Desafio 10
function techList(skill, name) {

  let list1 = {
    tech: skill[0],
    name: name,
  }
  let list2 = {
    tech: skill[1],
    name: name,
  }
  let list3 = {
    tech: skill[2],
    name: name,
  }
  let list4 = {
    tech: skill[3],
    name: name,
  }
  let list5 = {
    tech: skill[4],
    name: name,
  }

  let arrayList = [list1, list2, list3, list4, list5];
  return arrayList;

}
console.log(techList(["React", "Jest", "HTML"], 'Leandro'));





















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
