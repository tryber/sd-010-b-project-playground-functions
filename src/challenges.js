// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maiorNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let compar = 0; compar < array.length; compar += 1) {
      if (maiorNumero < array[compar]) {
        maiorNumero = array[compar];
      }
    }
    if (maiorNumero === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1; // 2
  let distanciaCat2 = mouse - cat2; // -6
  if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) {
    return "cat1";
  }
  else if (Math.abs(distanciaCat2) < Math.abs(distanciaCat1)) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
} console.log(catAndMouse(0, 3, 2))

let array = [7, 9];
// Desafio 8
function fizzBuzz(array) {
  let arrayIndx = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0 ) {
       arrayIndx[index] = "fizzBuzz";
    }
    else if (array[index] % 5 === 0) {
      arrayIndx[index] = "buzz";
    }
    else if (array[index] % 3 === 0) {
      arrayIndx[index] = "fizz";
    }
    else {
      arrayIndx[index] = "bug!";
    }
  } return arrayIndx;
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
