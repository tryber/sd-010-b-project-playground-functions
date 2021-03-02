// Desafio 1
function compareTrue(active, connected) {
  if (active === true && connected === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('Foguete'));

// Desafio 4
function concatName(string) {
  let first = string[0];
  let last = string[string.length - 1];
  return `${last}, ${first}`;
}

console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNum) {
  let qtd = 0;
  let maior = Math.max.apply(null, arrayNum);

  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] === maior) {
      qtd = qtd += 1;
    }
  }
  return qtd;
}

console.log(highestCount([0, 0, 0]));

// Desafio 7

// Desafio 8
function fizzBuzz(num) {

  const valores = num.map( function( number ) {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz'
    } else if (number % 5 === 0) {
      return 'Buzz'
    } else if (number % 3 === 0) {
      return 'Fizz'
    } else {
      return 'Bug!'
    }
  })

  return valores
  
}

console.log(fizzBuzz([9, 25]))

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
