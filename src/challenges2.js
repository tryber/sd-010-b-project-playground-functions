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

  if(numero.length != 11){
    return("Array com tamanho incorreto.");
  } 
  for(let index = 0; index < 11; index++){
    numbers[numero[index]]++;
    if(numero[index] < 0 ) return("não é possível gerar um número de telefone com esses valores");
  }
  //Verificar se há algum número repetido
  for(let index = 0; index < 10; index++){
    if(numbers[index] >= 3) return("não é possível gerar um número de telefone com esses valores");
  }

  return('(' + numero[0] + numero[1] + ')' + ' ' + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + '-' + numero[7] + numero[8] + numero[9] + numero[10]);

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const condicao = (lineA < (lineB+lineC)) && lineA > (Math.abs(lineB-lineC));

  return condicao;
}
console.log(triangleCheck(10,14,8));
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
