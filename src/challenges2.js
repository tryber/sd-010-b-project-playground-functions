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
function generatePhoneNumber(numero) {
  let resultado ;
  
  if(numero === 11){

  } 
  if else (numero < 11)
  {

  }
  else {
    resultado = "Array com tamanho incorreto."
  }

  console.log(resultado)
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let resultado ;
  if ((lineA+lineB > lineC&&lineC+lineB > lineA&&lineC+lineA > lineB )&& (Math.abs(lineA-lineB) < lineC && Math.abs(lineC-lineB) < lineA && Math.abs(lineC-lineA )< lineB ))  {
    resultado = true
  } else{
    resultado = false
  }
  console.log(resultado)
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
