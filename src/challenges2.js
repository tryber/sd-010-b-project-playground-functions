// Desafio 10
function techList(tec,name) {
  let saida = [];
  if(tec.length == 0) return('Vazio!')
  for(let index = 0; index < tec.length; index++){
    const info ={
      tech: tec[index],
      name: name
    }
    saida.push(info);
  }
  return(saida);
}
console.log(techList([],"Abimael"));

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
