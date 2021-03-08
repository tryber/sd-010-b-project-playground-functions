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
function generatePhoneNumber(comparador) {
  let numero = comparador 
  let resultado 
  

  for (let index in numero) {
    let count = 0;

    for (let index2 in numero ) {
      if  (numero[index] === numero[index2]) { count += 1; }
  } if (count >= 3 ){
    resultado= "não é possível gerar um número de telefone com esses valores"
  }
    }
   
    if (numero[i] <  0 || numero[i] >  9  ){
      resultado = "não é possível gerar um número de telefone com esses valores" ;
  } else if(numero === 11){
    resultado =  
     }
  
}
  

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let resultado ;
  if ((lineA+lineB > lineC&&lineC+lineB > lineA&&lineC+lineA > lineB ) && (Math.abs(lineA-lineB) < lineC && Math.abs(lineC-lineB) < lineA && Math.abs(lineC-lineA )< lineB ))  {
    resultado = true
  } else{
    resultado = false
  }
  
  return resultado
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
