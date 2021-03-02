// Desafio 1
function compareTrue(batman, robin) {
  return batman && robin;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

function concatName(names) {
  let firstElement = names.shift();
  let space = " "
  let lastElement = names.pop();
  let newArr = [lastElement, [space,firstElement].join("")];
  return newArr.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let biggest = 0;
  let count = 0;

  for ( key in array) {
        if(array[key] > biggest) {
        biggest = array[key];
         }
  }

  for ( key in array) {
      if(array[key] == biggest){
      count++;
   }
}
return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let saida;
  if( cat1 > cat2 ) {
    saida = "cat2"
  } else if ( cat1 < cat2 ){
    saida = "cat1"
  }else {
    saida = "os gatos trombam e o rato foge"
  }
  return saida
}

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
