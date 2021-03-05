// Desafio 10
function techList(tecnologias, name) {
  let info = {
   };
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
    let resultado;
  if (Math.abs(a) < Math.abs(b + c) && Math.abs(a) > Math.abs(b - c) && Math.abs(a) > Math.abs(c - b)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}


// Desafio 13
function hydrate(drink) {
  let hydratar = "";
  let numeros = [];
  let soma = 0;
  for(let i = 0; i < drink.length; i += 1){
    if(drink[i] >= 1 && drink[i] <= 9) {
      numeros.push(drink[i]); 
    }
  }
  for(let index = 0; index < numeros.length; index += 1) {
    soma += parseInt(numeros[index]);
  }

  if(soma < 2){
  hydratar = soma + " copo de agua";
  } else {
  hydratar = soma + " copos de agua";
  }
  return hydratar;
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
