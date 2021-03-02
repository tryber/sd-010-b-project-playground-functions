const { footballPoints } = require("./challenges");

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

// Desafio 11
function generatePhoneNumber(n) {
  let numero = n;
  let numbers = [0,0,0,0,0,0,0,0,0,0];
  for(let index = 0; index < 11; index++){
    numbers[numero[index]]++;
    if(numero[index] < 0 ) return("não é possível gerar um número de telefone com esses valores");
  }
  //Verificar se há algum número repetido
  for(let index = 0; index < 10; index++){
    if(numbers[index] >= 3) return("não é possível gerar um número de telefone com esses valores");
  }
  if(numero.length != 11){
    return("Array com tamanho incorreto.");
  } 
  

  return('(' + numero[0] + numero[1] + ')' + ' ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10]);

}

console.log(generatePhoneNumber([0, 2, 1, 3, 4, 2, 7, 8, 1, 0, 1, 0, 4]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const condicao = (lineA < (lineB+lineC)) && lineA > (Math.abs(lineB-lineC));

  return condicao;
}

function splitSentence(sentence) {
  let name = "";
  let result = [];
  for (let index = 0; index < sentence.length; index++){
    if(sentence[index] === " "){
      
      result.push(name);
      name = "";
      continue;
    }
    name += sentence[index];
  }
  result.push(name);
  return result;
}

// Desafio 13
function hydrate(pedido) {
  let agua = 0;
  let array = splitSentence(pedido);
  for(let key in array){
    if(parseInt(array[key])>= 0){
      agua += parseInt(array[key]);
    }
  }
  if(agua > 1) return(agua + " copos de água");
  else return(agua + " copo de água");
   // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
