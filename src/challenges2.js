// Desafio 10
function techList(array,name) {
  let lista = array ;
  let ordenar = lista.sort()
  let resultado = [];
   

  for(let i in ordenar){
     resultado.push(
       {
      tech: ordenar[i],
      name: name
    }
    )
  }

  return resultado
  

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
