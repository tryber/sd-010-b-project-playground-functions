// Desafio 1
function compareTrue(firstName, midleName) {
  // seu código aqui
  if(firstName == true && midleName == true){
    return true;
  }else{
    return false;
  }
}
//  console.log(compareTrue(true, true))
  
 
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
//  console.log(calcArea(51,1));


  // Desafio 3
function splitSentence(phrase) {
  // seu código aqui
    let phrases = phrase;
    return phrases.split(" ");
  }  

// console.log(splitSentence("he he he kkk kkk kkk"));


// Desafio 4
function concatName(names = []) {
  // seu código aqui
  let sem = [] = names[names.length - 1]
  let sema = names[0]
  let seman = sem + ', ' +  sema;
  return seman;
}

// console.log(concatName(["lucas" , "cassiano" , "ferraz", "paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
    let qtdPts = (wins * 3) + ties;
    return qtdPts;
}
 // console.log(footballPoints(1,2));

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
   let count = 0;
   let aux = 0;
    
   for(let index = 0; index < numbers.length; index += 1){
   if(numbers[index] > count){
     count = numbers[index];
   }  
  }
   for(let index = 0; index < numbers.length; index += 1){
     
    if(count == numbers[index]){
       aux += 1;
     }
   }
    return aux;
}

 // console.log(highestCount([0,0,0]));
// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2, dist) {
  // seu código aqui
  if(posCat1 < posCat2){
    dist = posCat1 - posMouse;
    return "cat1"
  }else if(posCat2 < posCat1){
    dist = posCat2 - posMouse;
    return "cat2"
  }else if(posCat1 == posCat2){
    return "os gatos batem e o rato foge"
  }
}

  console.log(catAndMouse(2,8,8));


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
