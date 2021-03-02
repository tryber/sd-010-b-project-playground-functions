/** Consultei o repositório do Cristiano Lopes Duarte para descobrir como conto ao leitor do arquivo que eu quero criar um objeto. É usando as chaves {} pra conter as keys com suas respectivas propriedades.
https://github.com/tryber/sd-09-project-playground-functions/blob/tkdcris-project-playground-functions/src/challenges.js
*/

// Desafio 10
function techList(arei, name){

    let objetoTechName = [];
    if(arei.length!==0){
        for(i in arei.sort()){
            objetoTechName.push({tech: arei[i], name})
        
        }
        return objetoTechName
    } else {
        return "Vazio!"
    }
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
