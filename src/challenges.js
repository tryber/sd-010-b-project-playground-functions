// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } return false;
} console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  // seu código aqui
} console.log(calcArea(20, 10));

// Desafio 3
function splitSentence(frase) {
  const splits = frase.split(' ', frase.length - 1);
  return splits;
} console.log(splitSentence('go trybe mano'));

// Desafio 4
function concatName(frase) {
  let ultimoItem = frase[frase.length - 1];
  let primeiroItem = frase[0];
  const splits = `${ultimoItem}, ${primeiroItem}`;
  return splits;
} console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties * 1);
  return total;
} console.log(footballPoints(5, 3));

// Desafio 6
function highestCount(numeros) {
  let indiceMaior = 0;
  let contRepetido = 0;
  for (index = 1; index <= numeros.length; index += 1) {
    if (numeros[index] > indiceMaior) {
      indiceMaior = numeros[index];
    } 
}
  for(index2 = 1; index2 <= numeros.length; index2 += 1) {
    if (numeros[index2] === indiceMaior) {
      contRepetido+=;
    }
  } return contRepetido;
} console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

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
  
 console.log(catAndMouse(5, 8, 3))
 


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
function encode(palavra) {
  let resultado = "";
  for(index = 0; index <= palavra.length-1; index++){
    
    if(palavra[index] === "a"){
      resultado += 1; 
    } else if(palavra[index] === "e"){
      resultado += 2;
    } else if(palavra[index] === "i"){
      resultado += 3; 
    } else if(palavra[index] === "o"){
      resultado += 4;
    } else if(palavra[index] === "u"){
      resultado += 5;
    } else{
      resultado += palavra[index];
    }
  }
  return resultado;
} console.log(encode("paralelepipedo"))

function decode(palavra) {
  let resultado = "";
  for(index = 0; index <= palavra.length-1; index++){
    
    if(palavra[index] == 1){
      resultado += "a"; 
    } else if(palavra[index] == 2){
      resultado += "e";
    } else if(palavra[index] == 3){
      resultado += "i"; 
    } else if(palavra[index] == 4){
      resultado += "o";
    } else if(palavra[index] == 5){
      resultado += "u";
    } else{
      resultado += palavra[index];
    }
  }
  return resultado;
} console.log(decode("p1r1l2l2p3p2d4"))


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
