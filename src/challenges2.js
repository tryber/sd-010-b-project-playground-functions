// Desafio 10
function techList(array,name) {
  let tecnologias = array.sort();
  let nome = name;
  let objeto = {};
  let novoarray =[];
  
  if (tecnologias.length===0) {
    return "Vazio"
    
  }
  
  for (let index in tecnologias) {
    objeto={tech: tecnologias[index],
      name: nome}
      novoarray.push(objeto)
  
    }
  
   
    return novoarray
  }console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
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
