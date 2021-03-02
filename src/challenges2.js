// Desafio 10
function techList(tech, name) {
  let novaArray = tech.sort();
  let objeto = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < novaArray.length; i += 1) {
    objeto[i] = {
      tech: novaArray[i],
      name: name};
  }
  return objeto;
} 

// Desafio 11
function generatePhoneNumber(array) {
 
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let trianguloPossivel;
  let condicao1 = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
  let condicao2 = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
  let condicao3 = (lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB));
  if (condicao1 && condicao2 && condicao3) {
    trianguloPossivel = true;
  } else {
    trianguloPossivel = false;
  }
  return trianguloPossivel;
} console.log(triangleCheck(10, 14, 8))

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
