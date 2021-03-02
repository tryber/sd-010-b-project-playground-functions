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
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
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
  }
  
  console.log(highestCount([2, 3, 2, 5, 8, 2, 3]));


  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let a = mouse - cat1;
     let b = mouse - cat2;
     if (a - b !== 0 && b - a !== 0 ){
      if (a > b ) {
        return "cat1"
    } else if(b > a){
        return "cat2"
    } 
  }  else {
          return "os gatos trombam e o rato foge";          
        }
      }
 console.log(catAndMouse(1, 0, 2))
 


// Desafio 8
function fizzBuzz(Array) {
  for (index = 0; index <= Array.length-1; index ++) {
   

    if (Array[index] /3 === 0 && Array[index] /5 == 0) {
      return "fizzBuzz";
    } else if(Array[index]/5 === 0 && Array[index] /2 !== 0 && Array[index] /3 !== 0){
      return "buzz"
    } 
    else if(Array[index]/3 === 0 && Array[index] /2 !== 0 && Array[index] /5 !== 0) {
      return "fizz";
    } else if(Array[index]/5 === 0 && Array[index] /2 !== 0 && Array[index] /3 !== 0){
      return "buzz"
    } else {
      return "bug"
    }  

}
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
