// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
 } 
  return false;
 }
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  // seu código aqui
 } 
console.log(calcArea(20, 10));


// Desafio 3
function splitSentence(frase) {
const splits = frase.split(" ", frase.length-1)
return splits;
  // seu código aqui
} console.log(splitSentence("go trybe mano"))

// Desafio 4
function concatName(frase) {
  let ultimoItem = frase[frase.length-1];
  let primeiroItem = frase[0]
  const splits = ultimoItem + " " + primeiroItem
return splits;
} 
console.log(concatName(['foguete', 'não', 'tem', 'ré']))
  

// Desafio 5
function footballPoints(wins, ties) {
let total = (wins * 3) + (ties * 1);
return total;
} 
console.log(footballPoints(5, 3));
  // seu código aqui

  // Desafio 6
function highestCount() {

  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let a = cat1 + mouse;
     let b = cat2 + mouse;
    
        if (a > b) {
            return "cat1"
        } else if(b > a){
            return "cat2"
        } else{
          return "os gatos trombam e o rato foge"
        }
}
 console.log(catAndMouse(6, 4, 4))
 


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
