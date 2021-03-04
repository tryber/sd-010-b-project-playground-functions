
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo === true) return true;
  return false;
  }

  function calcArea(base, heigth) {
  let calculo = ((base * heigth) / 2);
  return calculo;
 }

// Desafio 3
function splitSentence(text) {
  let result = text.split(" ");
  return result 
}

// Desafio 4
function concatName(words) {
  return `${words[words.length - 1]}, ${words[0]}`;
}
// Desafio  
function footballPoints(wins, ties) {
  let totalPoints = ((wins * 3) + ties);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayGrande) {
  let contador = arrayGrande.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let valueCat1 = Math.abs(cat1 - mouse);
  let valueCat2 = Math.abs(cat2 - mouse);
  if (valueCat1 > valueCat2) {
    return "cat2";
  } else if (valueCat2 > valueCat1) {
    return "cat1";
  }
  return "os gatos trombam e o rato foge";
}
console.log(catAndMouse(4, 7, 4));
// Desafio 8
function fizzBuzz() {
  let result = [];
  for (let count of array) {
    switch (true) {
      case count % 3 === 0 && count % 5 === 0:
        result.push('fizzBuzz');
        break;
      case count % 3 === 0:
        result.push('fizz');
        break;
      case count % 5 === 0:
        result.push('buzz');
        break;
      default:
        result.push('bug!');
        break;
    }
  }
  return result;
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
