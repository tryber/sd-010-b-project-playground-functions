// Desafio 10
function techList(tec,name) {
  let order = tec.sort();


  let saida = [];
  if(tec.length == 0) return('Vazio!')
  for(let index = 0; index < order.length; index++){
    const info ={
      tech: order[index],
      name: name
    }
    saida.push(info);
  }
  return(saida);
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Abimael"));

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
