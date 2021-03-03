// Desafio 10
let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Jonnes";
console.log(techList(techs, name));
function techList(techs, name) {
  let list = [];
  for (let i = 0; i < techs.length; i++) {
    newTech = {
      tech: techs[i],
      name: name
    };
    list.push(newTech) // I found this push() function at https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
  }
  list.sort(sortByTech);
  return list;
}

// I found this logic at https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function sortByTech(a, b) {
  if ( a.tech < b.tech ){
    return -1;
  }
  if ( a.tech > b.tech ){
    return 1;
  }
  return 0;
}

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
