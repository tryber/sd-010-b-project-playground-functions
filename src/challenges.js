// Desafio 1
function compareTrue(a, b) {
  if (a && b === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
    return area
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
    return array;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  let final = ultimoItem + ', ' + primeiroItem;

  return final;
}

console.log()
// Desafio 5
function footballPoints(wins, ties) {
   let vitorias = wins * 3;
   let empates = ties;
   let pontos = vitorias + empates;

   return pontos;
}

// Desafio 6
function highestCount(array) {
  let quantidadeDeVezes = 0;
  let maiorNumero = array[0]

  for (i = 0; i < array.length; i++){
     if (array[i] > maiorNumero){
       maiorNumero = array[i]
     }
  for (i = 0; i < array.length; i++){
      if (array[i] === maiorNumero){
         quantidadeDeVezes++
      }
    }
  }
    return quantidadeDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let mensagem = "";
   if (cat1 == cat2){
      mensagem = "os gatos trombam e o rato foge"
   } else if (cat1 - mouse < cat2 - mouse){
      mensagem = "cat1"
   } else {
      mensagem = "cat2"
   }
   return mesagem
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFinal = [];
  for (let i = 0; i < array.length; i++){
      if(array[i] % 3 == 0 && array[i] % 5 == 0){
       arrayFinal.push("fizzbuzz");
   } else if (array[i] % 5 == 0) {
       arrayFinal.push("buzz");
   } else if (array[i] % 3 == 0) {
       arrayFinal.push("fizz");
   } else {
       arrayFinal.push("bug!");
   }
 }
  return arrayFinal;
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
