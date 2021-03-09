// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 === true && boolean2 === false || boolean1 === false && boolean2 === true){
    return false
    } else if(boolean1 === false && boolean2 === false){
    return false
    } else {
    return true  
    }
  }
  console.log(compareTrue(false, true))
  console.log(compareTrue(false, false))
  console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
 let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1)); 

// Desafio 3
function splitSentence(string) {
  let arraySentences = string.split(' ')
  return arraySentences  
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let string = ''
  for (let key = 0; key < array.length; key += 1){
    string = array[array.length - 1] + ', ' + array[0]
  }
  return string
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
console.log(concatName(['foguete', 'não', 'tem', 'ré']))
console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numero) {
  let numberEqual = 0;
  let higherNumber = 0;
  for (let key in numero) {
    if (numero[higherNumber] <= numero[key]){
      higherNumber = numero[key];
    }
  }
  for (let key2 in numero) {
    if (higherNumber === numero[key2]){
    numberEqual += 1
    }
  }
  return numberEqual
}
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
  console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
  console.log(highestCount([0, 0, 0]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(mouse - cat1);
  let mouseCat2 = Math.abs(mouse - cat2);

  if (mouseCat1 < mouseCat2) {
      return "cat1"
  } else if (mouseCat2 < mouseCat1) {
      return "cat2"
  } else {
      return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(0, 3, 2))
console.log(catAndMouse(0, 6, 12))
console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(numeros) {
  let result = []
  for (let key in numeros){
    if (numeros[key] % 3 === 0 && numeros[key] % 5 !== 0){
      result.push('fizz')
    } else if (numeros[key] % 5 === 0 && numeros[key] % 3 !== 0){
      result.push('buzz')
    } else if (numeros[key] % 3 === 0 && numeros[key] % 5 === 0){
      result.push('fizzBuzz')
    } else {
      result.push('bug!')
    }  
}
return result
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let encodingString = '';

  for (let key = 0; key < string.split('').length; key += 1){

    if (string.split('')[key] === 'a'){
      encodingString += '1'
    } else if (string.split('')[key] === 'e'){
      encodingString += '2'
    } else if (string.split('')[key] === 'i'){
      encodingString += '3'
    } else if (string.split('')[key] === 'o'){
      encodingString += '4'
    } else if (string.split('')[key] === 'u'){
      encodingString += '5'
    } else {
      encodingString += string.split('')[key]
    }
  }
  return encodingString
}
console.log(encode('hi there!'))

function decode(string) {
  let decodingString = '';

  for (let key = 0; key < string.split('').length; key += 1){

    if (string.split('')[key] === '1'){
      decodingString += 'a'
    } else if (string.split('')[key] === '2'){
      decodingString += 'e'
    } else if (string.split('')[key] === '3'){
      decodingString += 'i'
    } else if (string.split('')[key] === '4'){
      decodingString += 'o'
    } else if (string.split('')[key] === '5'){
      decodingString += 'u'
    } else {
      decodingString += string.split('')[key]
    }
  }
  return decodingString
}
console.log(decode('h3 th2r2!')) 

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
