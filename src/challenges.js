// Desafio 1
function compareTrue(num1, num2) {
  if (num1 > 0 && num2 < 10){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base*heigth)/2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName() {
  names = [];
  return names[names.length-1] + ',' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let numbers = [];
  for(i = 0; i > numbers.length; i += 1){
    return Math.max(numbers.length);
  }
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);
  if (cat1Pos < cat2Pos) {
    return "cat1";
  } else if (cat2Pos < cat1Pos){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz() {
  for (var i = 1; i <= n; i+= 1) {
    if (i % 3 === 0) {
        console.log( "fizz");
    }else if (i % 5 === 0) {
        console.log("buzz");
    }else if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz");
    }else {
        console.log("bug");
    }
  }
}

// Desafio 9
function encode() {
  
}
function decode() {
  
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
