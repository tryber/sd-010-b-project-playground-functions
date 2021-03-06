// Desafio 1
function compareTrue(Valeu1, Valeu2) {
  let Value1 = true;
  let Value2 = true;
  let result = false;
   
  if (Valeu1 == true && Valeu2 == true ){
    result = true;
  }
return result;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let areaT = (base*height)/2;
return areaT
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(" ");
  
  return result
}
console.log(splitSentence("Foguete"));

// Desafio 4
function concatName(arrStrings) {

  result = arrStrings[(arrStrings.length - 1)] + ", " + arrStrings[0];
  return result
}
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  result = 0;

  result = wins*3 + ties*1;

  return result;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let countNumber = 0;
  let higherNumber = 0;

  for (let i in array){
    if (array[i] > higherNumber){
      higherNumber = array[i];
    }
  }
    for (let i2 in array){
      if (higherNumber == array[i2]){
        countNumber += 1;
      }
    } 
  return countNumber;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse (mouse, cat1, cat2) {
  let result = "";
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    result = "cat1";
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)){
    result = "cat2";
  } else {
    result = "os gatos trombam e o rato foge";
  }
  return result
}
console.log(catAndMouse(10,6,12));

// Desafio 8
function fizzBuzz(arrNumbers) {
  let arrResult = [];

  for (let i in arrNumbers){
    if (arrNumbers[i] % 3 == 0){
      arrResult[i] = "fizz"
    }
  }
  for (let i in arrNumbers){
    if (arrNumbers[i] % 5 == 0){
      arrResult[i] = "buzz"
    }  
  }
  for (let i in arrNumbers){
    if (arrNumbers[i] % 3 != 0 && arrNumbers[i] % 5 != 0){
      arrResult[i] = "bug!"
    }
  }
  for (let i in arrNumbers){
    if (arrNumbers[i] % 3 == 0 && arrNumbers[i] % 5 == 0){
      arrResult[i] = "fizzBuzz"
    }
  }
return arrResult
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
 function encode(phrase) {
  let result = "";
  let objDb = {a : 1, e : 2, i : 3, o : 4, u : 5};

   for (let i in phrase){
      if (objDb[phrase[i]]){
      result += objDb[phrase[i]];    
    } else {
      result += phrase[i];
    } 
  };
  return result;
 };
console.log(encode("go Trybe!"));

function decode(phraseCode) {
  let result = "";
  let objDb = {1 : "a", 2 : "e", 3 : "i", 4 : "o", 5 : "u"};

   for (let i in phraseCode){
      if (objDb[phraseCode[i]]){
      result += objDb[phraseCode[i]];    
    } else {
      result += phraseCode[i];
    } 
  };
 return result;
};
console.log(decode("g4 Tryb2!"));


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
