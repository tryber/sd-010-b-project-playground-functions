// Desafio 10
// (Referencia para saber metodo sort) https://www.w3schools.com/jsref/jsref_sort.asp
function techList(name) {
  let listaArray = name.sort();
  let nome = 'Lucas';
  let returnName = [];
  if (listaArray.length > 1) {
    for (let index = 0; index < listaArray.length; index += 1) {    
      returnName.push({ tech: listaArray[index], name: nome });
    } 
  } else {
    returnName = 'Vazio!';
  }
  return returnName;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"]));
// Desafio 11
function generatePhoneNumber(array) {

}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <(lineB + lineC) && (lineA > (Math.abs(lineB - lineC))) &&
  (lineB <(lineA + lineC) && (lineB > (Math.abs(lineA - lineC ))) &&
  (lineC <(lineB + lineA) && (lineC > (Math.abs(lineB - lineA)))))) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));
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
