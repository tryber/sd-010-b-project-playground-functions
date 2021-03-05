// Desafio 1
function compareTrue(x, y) {
  return x && y;
}


////////////////////////////////////////////////////////////////////////////////////
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


/////////////////////////////////////////////////////////////////////////////////////
// Desafio 3
function splitSentence(string) {
 return string.split(' ');
}



/////////////////////////////////////////////////////////////////////////////////////
// Desafio 4
function concatName(lista) {
  let concat = lista[lista.length -1] + ", " + lista[0];
  return concat;
}

//////////////////////////////////////////////////////////////////////////////////////
// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3 ) + (ties * 1));
}

// Desafio 6
function highestCount(numero) {
  let indiceMaior = 0;
  let contador = 0;
  
  for (let indice in numero){
    if (numero[indiceMaior] < numero[indice])
    indiceMaior = indice; 
  }
  
  for (let key in numero){
    if (numero[key] === numero[indiceMaior]){
      contador += 1;
    }
  }

  return  contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let alcancaPrimeiro = '';

  if (distCat1 < distCat2) {
    alcancaPrimeiro = 'cat1';
  }
  if (distCat2 < distCat1) {
    alcancaPrimeiro = 'cat2';
  }
  if (distCat1 === distCat2) {
    alcancaPrimeiro = 'os gatos trombam e o rato foge';
  }
  return alcancaPrimeiro;
}




// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (let index = 0; index < array.length; index += 1){
    if (array[index] %3 === 0 && array[index] %5 === 0){
      string.push("fizzBuzz");
    } 
    
    else if (array[index] %3 === 0){
      string.push("fizz");
    } 
    
    else if (array[index] %5 === 0){
      string.push("buzz");
    }

     else {
      string.push("bug!");
    }
  }
  return string;
}
console.log(fizzBuzz([ 2, 15, 7, 9, 45]));



// Desafio 9
function encode(palavra) {
  let frase = 'oi';
  let  novaFrase = ' ';
  if (palavra === frase) {
    novaFrase = frase.replace ( 'oi lá' , 'h3 th2r2' ) ;
  }
  return  novaFrase ;
}

function decode(str) {
  let frase = 'h3 th2r2';
  let novaFrase = ' ';
  if (palavra === frase) {
    novaFrase = frase.replace('h3 th2r2', 'hi there') ;
  }
  return  novaFrase ;
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
