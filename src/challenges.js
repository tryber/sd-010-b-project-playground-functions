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
  return Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse) ? "cat1" : Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse) ? "cat2" : "os gatos trombam e o rato foge"
}


// Desafio 8
function fizzBuzz(arr) {
  let exit = [];
  for (let index = 0; index < arr.length; index++) {
    exit.push(
      arr[index] % 3 === 0 && arr[index] % 5 === 0 ? "fizzBuzz" : 
      arr[index] % 3 === 0 ? "fizz" : 
      arr[index] % 5 === 0 ? "buzz" : "bug!"
    );

  }
  return exit;
}

// Desafio 9
function encode(string) {
  let saida = string
  let vogais = [
    "*",
    'a',
    'e',
    'i',
    'o',
    'u'
]
for( i in string){
    saida = saida.replace(vogais[1], 1).replace(vogais[2], 2).replace(vogais[3], 3).replace(vogais[4], 4).replace(vogais[5], 5)
}
    
return saida
}

function decode(string) {
  let saida = string
let vogais = [
    0,
    1,
    2,
    3,
    4,
    5
]
for( i in string){
    saida = saida.replace(vogais[1], "a").replace(vogais[2], "e").replace(vogais[3], "i").replace(vogais[4], "o").replace(vogais[5], "u")
}
return saida
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
