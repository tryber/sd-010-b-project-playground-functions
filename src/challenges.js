// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}
console.log(compareTrue(false, true));
// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui

  return frase.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4

function concatName(string){
  // seu código aqui
  let ultimoItem = string[string.length - 1];
  let primeiroItem = string[0];
  let result = ultimoItem  + ','+ primeiroItem;
  return result;
}
 console.log(concatName((['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])));
 console.log(concatName(['foguete', 'não', 'tem', 'ré']));
 console.log(concatName(['captain', 'my', 'captain']));
//Desafio 5
function footballPoints() {
  // seu código aqui
}
// Desafio 6
let numbers = [9, 1, 2, 3, 9, 5, 7];
let higherNumber = 0;
function highestCount(higherNumber) {
  // seu código aqui
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === higherNumber) {
    higherNumber++;
  }
  
}
return higherNumber;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let result = ''; 
  let distanciaCat1 = mouse - cat1; 
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 === distanciaCat2 || cat1 === cat2) {
    result = 'os gatos trombam e o rato foge';
  } if (distanciaCat1 > distanciaCat2) {
    result = "cat1";
  } if ( distanciaCat2 < distanciaCat1) {
    result = "cat2";
  }
  return result;

};
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      console.log("fizzBuzz")
    }
    else if (array[index] % 5 === 0) {
      console.log("buzz")
    }
    else if (array[index] % 3 === 0) {
      console.log("fizz")
    }
    else {
      console.log("bug!")
    }
  }
  return array;
}


// Desafio 9
function encode(phrase) {
  // seu código aqui
     let newPhrase = phrase.replace(/a/gi, '1')
      .replace(/e/gi, '2')
      .replace(/i/gi, '3')
      .replace(/o/gi, '4')
      .replace(/u/gi, '5')
    return newPhrase;
}  

function decode(phraseDecode) {
  // seu código aqui
  let decod = phraseDecode.replace(/1/gi, 'a')
  .replace(/2/gi, 'e')
  .replace(/3/gi, 'i')
  .replace(/4/gi, 'o')
  .replace(/5/gi, 'u')
return decod;

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
