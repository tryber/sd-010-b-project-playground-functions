// Desafio 10
function techList(tecnologias, name) {
  let info = {
   };
}
// Desafio 11

function generatePhoneNumber(numero) {
  let telefone = '';

  telefone = ('(' + numero[0] + numero[1] + ')' + ' ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10]);

  for(let i = 0; i < numero.length; i += 1) {
    if(numero[i] > 9 || numero[i] < 0){
      telefone = 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let contador = 0;
  let repeticoes = [];
  for(let i = 0; i < numero.length; i += 1){
    for(let index = 0; index < numero.length; index += 1){
      if(numero[i] === numero[index]){
        contador += 1;
      }
      if(contador > 2){
        repeticoes.push(contador);
      }
    }
    contador = 0;
  }
  if(repeticoes.length > 0){
    telefone = 'não é possível gerar um número de telefone com esses valores';
  }

  if(numero.length !== 11){
    telefone =  'Array com tamanho incorreto.';
  } 
  return telefone;
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
  hydratar = soma + ' copo de água';
  } else {
  hydratar = soma + ' copos de água';
  }
  return hydratar;
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
