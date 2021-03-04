// Desafio 1
function compareTrue(par1, par2) {
  let variable = false;
  if (par1 === true && par2 === true) {
    return variable = true
    } else if ( par1 === false && par2 === false ) {
      return variable = false
    } else if ( par1 === true && par2 === false) {
      return variable = false;
    } else if ( par1 === false && par2 === true) {
      return variable = false;
    } else { return variable = false; }

    
}
 
// Desafio 2
function calcArea(base, height) {
  
  return (base*height)/2;
}

// Desafio 3
function splitSentence(word) {
 let arrayWord = word.split(" ");
 return arrayWord
} //https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

// Desafio 4
function concatName(array) {
  return array[array.length-1] + ", " + array[0]
  
 }

//recebi a ajuda dos colegas durante o breakout room para colocar os "[]" para descobrir o primeiro elemento

// Desafio 5
function footballPoints(wins, ties) {
  let victoriesPoints = wins*3
  let tiesPoints = ties
  return victoriesPoints + tiesPoints
}

// Desafio 6
function highestCount(number) {
  let maximumNumber = 0;
  let NumberOccurrances = 0;

  for (let index = 0; index < number.length; index += 1){
      if (maximumNumber < number[index]){
        maximumNumber = number[index]
      }
    }
    for(let key in number){
      if (maximumNumber === number[key]){
        NumberOccurrances += 1;
        }
      }
  

  return NumberOccurrances
}
  
// exercicio resolvido após o plantão onde um colega tinha uma dúvida sobre esta questão. Além disso, também participei de um grupo de estudos onde verificamos esta questão.

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ) {
      return "cat2"
  } else { return "os gatos trombam e o rato foge"}
//após a dica de valor absoluto dada nas instruções do README do projeto
}


// Desafio 8
function fizzBuzz(array) {
  let somaDeFizzBuzz = [];
  for (let index = 0; index < array.length; index+=1){
    
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      somaDeFizzBuzz.push("fizzBuzz");
    }    
    else if (array[index] % 3 == 0) {
      somaDeFizzBuzz.push("fizz")
    }  
    else if (array[index] % 5 == 0) {
      somaDeFizzBuzz.push("buzz")
    } 
    else {somaDeFizzBuzz.push("bug!")}
  }
  return somaDeFizzBuzz
 
}
//resolução após plantão de dúvidas com Fernando onde outro colega também estava com a mesma dúvida

// Desafio 9
function encode(word) {
  
  
  for (let index = 0; index < word.length; index +=1) {
   word = word.replace("a", 1).replace("e", 2).replace("i", 3).replace("o", 4).replace("u", 5)
  }
  return word
} console.log(encode("hi there"))
//fiz este exercício com a ajuda dos colegas em grupo de estudos.
  

function decode (word1) {
  for (let index = 0; index < word1.length; index +=1) {
    word1 =  word1.replace(1, "a").replace(2, "e").replace(3, "i").replace(4, "o").replace(5, "u")
   }
   return word1
 }
//fiz este exercício com a ajuda dos colegas em um grupo de estudos.


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
