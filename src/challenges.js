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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  return(wins*3)+(ties*1);
}


// Desafio 6
function highestCount() {
  // seu código aqui
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
function fizzBuzz(vetor) {
  // seu código aqui
  let vetorderetorno=[];
    for (let i = 0; i<vetor.length ; i++){
      if((vetor[i]%3 == 0) && (vetor[i] % 5 == 0)){
        vetorretorno [i] = "fizzBuzz";
      }
      else if ((vetor[i]%3 == 0) && (vetor[i] % 5 !=0)) {
        vetorretorno [i] = "fizz";
      }
      else if ((vetor[i]%3 != 0) && (vetor[i] % 5 == 0)) {
        vetorretorno [i] = "buzz";

      }
      else {
        vetorderetorno[i] = "bug!";
      }
    }
 return vetorderetorno;
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
