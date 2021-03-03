// Desafio 1
function compareTrue(valora,valorb) {
  // seu código aqui
  if((valora === true) && (valorb === true)){
    return true;
  }
  else{
    return false;
  }
  

}

// Desafio 2
function calcArea(base,height) {

return (base*height)/2;
  
}


// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(string) {
  // seu código aqui

  let primeiro = string[0];
  let ultimo = string[string.length - 1];

  
  return ultimo + "," +  primeiro;
}


// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  return(wins*3)+(ties*1);
}


// Desafio 6
function highestCount() {
    // seu código aqui
    // https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
    // como dito o apply passa os valores do array para função math.max e assim ela analisa o maior.
    
    let maior = Math.max.apply(null,array);
    //preciso inicializar a contagem porém quando sair do for ele será 0
    let count = 0;
    for(let i = 0;i<array.length; i++){

      if(count === maior){
        count++;
      }
      else{}
      //estou armazenando o count em uma atualização
      let countatt = count;

    }    
         
  return countatt;
}



// Desafio 7
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse,cat1,cat2) {

  let catone = Math.abs(cat1-mouse);
  let catwo = Math.abs(cat2-mouse);
  
    if(catone<catwo){
      return "cat1";
    }
    else if (catone>catwo){
      return "cat2";
    }
    else if (catone === catwo) {
      return "os gatos trombam e o rato foge";
    }

}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
  
  
}



// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
