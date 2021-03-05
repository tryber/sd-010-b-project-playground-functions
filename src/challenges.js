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
  for (let indice = 0; indice < palavra.length; indice += 1)  {
    palavra = palavra.replace('a', 1).replace('e',2).replace('i', 3).replace('o', 4).replace('u', 5);
  }
  return palavra;
}


function decode(palavra) {
  for (let indice = 0; indice < palavra.length; indice += 1)  {
    palavra = palavra.replace(1, "a").replace(2,"e").replace(3, "i").replace(4, "o").replace(5, "u");
  }
  return palavra;
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
