// Desafio 10
function techList(array, name) {
  array.sort(); //Source: https://www.w3schools.com/jsref/jsref_sort.asp

  let ar = [];
  let ob = {}

  for(let i=0; i<array.length; i++){
      ob.tech = array[i];
      ob.name = name;
      ar.push(ob); //Source: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
      ob={};
    }
return (ar);
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
