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
 return string.split('');
}
console.log(splitSentence ( "go Trybe" ));


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

  if  ( ( cat1  -  mouse )  <  ( cat2  -  mouse ) )  {

    if  ( Math . abs ( cat1  -  mouse )  ==  Math . abs ( cat2  -  mouse ) ) {
      return  "os gatos trombam e o rato foge" ;
    }  else  if  ( ( cat1  -  mouse )  <  ( cat2  -  mouse ) )  {
      return  "cat1" ;
    }  else  if  ( ( cat1  -  mouse )  >  ( cat2  -  mouse ) )  {
      return  "cat2" ;
    }  else  if  ( cat1  ==  cat2 )  {
      return  "os gatos trombam e o rato foge"
    }
  }
}
console . log ( catAndMouse ( 1 ,  3 ,  2 ) ) ;
console . log ( catAndMouse ( 1 ,  6 ,  12 ) ) ;



// Desafio 8
function fizzBuzz(array, string) {
  string = [];
  for (let index = 0; index < array.length; index += 1){
    if (array[index] %3 === 0 && array[index] %5 === 0){
      string.push("FizzBuzz");
    } 
    
    else if (array[index] %3 === 0){
      string.push("Fizz");
    } 
    
    else if (array[index] %5 === 0){
      string.push("Buzzz");
    }

     else {
      string.push("Bug");
    }
  }
  return string;
}
console.log(fizzBuzz([ 7, 9]));




// Desafio 9
function encode() {
  
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
