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
  const splits = ultimoItem + ", " + primeiroItem
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
function highestCount(numeros) {

  let indiceMaior = 0; 
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for(let indice in numeros){
      if (numeros[indice] > numeros[indiceMaior]) { 
          indiceMaior = indice;      
     for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero++;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }     }}           
  console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));


  // seu código aqui


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1; 
  
  if (distanciaCat1 < 0){
    distanciaCat1 = cat1 - mouse
  }
     let distanciaCat2 = mouse - cat2;
     if (distanciaCat2 < 0){
      distanciaCat2 = cat2 - mouse
    }
     if(distanciaCat1 - mouse === distanciaCat2 - mouse) {
      return "os gatos trombam e o rato foge";          
    }   
     else if (distanciaCat1 < distanciaCat2 ) {
        return "cat1"
    } else{
        return "cat2"
    } 
  }   
  
 console.log(catAndMouse(0, 3, 2))
 


// Desafio 8
function fizzBuzz(Array) {
  let resultado = [];
  for (let index = 0; index <= Array.length-1; index ++) {
    if (Array[index] % 3 === 0 && Array[index] % 5 === 0) {
      resultado.push('fizzBuzz'); 
    } else if(Array[index] % 5 === 0 && Array[index] % 2 !== 0 && Array[index] % 3 !== 0){
     resultado.push("buzz");
    } else if(Array[index] % 3 === 0 && Array[index] % 2 !== 0 && Array[index] % 5 !== 0) {
      resultado.push("fizz");
    } else {
      resultado.push("bug!")
    }  
}
return resultado
}
console.log(fizzBuzz([7, 9]))

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
