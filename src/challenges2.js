// Desafio 10
function techList(array,name) {
  let tecnologias = array.sort();
  let nome = name;
  let objeto = {};
  let novoarray = [];
  
  if (tecnologias.length === 0) {
    return "Vazio!";
     }
  for (let index in tecnologias) {
    objeto= {tech: tecnologias[index],
      name: nome}
      novoarray.push(objeto)
    }
    return novoarray
  }console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Lucas"))
  
// Desafio 11
function generatePhoneNumber(array){
  let contador = 0;
  let contador2 = 0;
  let mascara = "(**)****-****";
  mascara = mascara.split("");
  let intContador = 0;
  let aNumero=array;
  
  if (aNumero.length !== 11){
      return "Array com tamanho incorreto."
  };
  
  for (let index in aNumero){
    numero=aNumero[index];
    for (index2 in aNumero){
      if (aNumero[index] == aNumero[index2]) {
        intContador++
      }
    }
    if (intContador >= 3|| numero < 0|| numero > 9){
      return "não é possível gerar um número de telefone com esses valores"
    }else {
      intContador = 0
    }
    
    if (mascara[contador2] == "*"){
      mascara[contador2] = aNumero[contador]
    } else {
        contador--
    }
    contador++;
    contador2++;
    if (index > 8){
      mascara[contador2+1] = aNumero[contador+1]
    }
    if (index > 9){
      mascara[contador2+2] = aNumero[contador+2]
    }
  }
  mascara = mascara.join("");
  return mascara;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, -9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7,9, 0, 1]));
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
