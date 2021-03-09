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





// Desafio 8
function fizzBuzz(array) {
  let numberArray = array

  for (let index = 0; index < numberArray.length; index += 1) {
    if ((numberArray[index] % 3 === 0 ) && (numberArray[index] % 5 === 0 )){
      numberArray[index] = "fizzBuzz";
    } else if (numberArray[index] % 3 === 0) {
      numberArray[index] = "fizz";
    } else if (numberArray[index] % 5 === 0) {
      numberArray[index] = "buzz";
    } else {
      numberArray[index] = "bug!"
    }    
  }
  return numberArray;
}



// Desafio 9
function encode(string) {
  let receivedString = string.toLowerCase();
  let newString = ''
  for (let value of receivedString){
    if (value === 'a') {
      newString += '1';
    } else if (value === 'e') {
      newString += '2';
    } else if (value === 'i') {
      newString += '3';
    } else if (value === 'o') {
      newString += '4';
    } else if (value === 'u') {
      newString += '5';
    } else {
      newString += value
    }
  }
  return newString;
}

function decode(string) {
  let receivedString = string.toLowerCase();
  let newString = ''
  for (let value of receivedString){
    if (value === '1') {
      newString += 'a';
    } else if (value === '2') {
      newString += 'e';
    } else if (value === '3') {
      newString += 'i';
    } else if (value === '4') {
      newString += 'o';
    } else if (value === '5') {
      newString += 'u';
    } else {
      newString += value
    }
  }
  return newString;
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
