// Desafio 1
function compareTrue(num1, num2) {
  // seu código aquiaa
  if((num1===true) && (num2===true)){
    return true;
  }else
  return false;
}



// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

//split divide frase
// Desafio 3
function splitSentence(Strings) {
  return Strings.split(" ");
}


// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins *3 + ties *1;
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
  return count
}


// Desafio 7 cat1 2 , cat2 -6
function catAndMouse(cat1,cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
    if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) {
      return "cat1";
    }
    else if (Math.abs(distanciaCat2) < Math.abs(distanciaCat1)) {
      return "cat2";
    }
    else {
      return "os gatos trombam e o rato foge";
    }
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
}
