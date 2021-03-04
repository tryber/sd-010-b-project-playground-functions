// Desafio 1
function compareTrue(a, b) {
 if(a === true && b === true ) {
  return true;
 } else if(a === false || b === false ){
  return false;
 } else {
   false
 }
}
 

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  arrayString = string.split(" ");
  return arrayString;
}


// Desafio 4
function concatName(array) {
  let fiirstElement = array.shift();
  let lastElement = array.pop();
  let stringConcat = lastElement + ", " + fiirstElement;
  return stringConcat;
}



// Desafio 5
function footballPoints(wins, ties) {
  pointsWins = wins * 3;
  totalOfPoints = pointsWins + ties;
  return totalOfPoints
}


// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumbers = arrayNumbers[0];
  for(key in arrayNumbers){
     if(arrayNumbers[key] > higherNumbers){
       higherNumbers = arrayNumbers[key];
     }
  }
  let counter = 0;
  for(key in arrayNumbers){
    if(higherNumbers === arrayNumbers[key]){
      counter++
    }
  }
  return counter;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  function verificaDistancia(a, b) {
    let distancia = Math.abs((a) - (b));;
    return distancia;
  }

  let distanciaCat1 = verificaDistancia(mouse, cat1);
  let distanciaCat2 = verificaDistancia(mouse, cat2);
  let error = "os gatos trombam e o rato foge";
  let respostaCat1 = "cat1";
  let respostaCat2 = "cat2";

  if(distanciaCat1 === distanciaCat2) {
    return error 
  }

  if( distanciaCat1 < distanciaCat2){
    return respostaCat1;
  }else if (distanciaCat1 > distanciaCat2) {
    return respostaCat2;
  } else {
    return error;
  }
}
console.log(catAndMouse(1,0,2))





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
