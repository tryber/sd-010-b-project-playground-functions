// Desafio 1
function compareTrue(n1, n2) {
  let compare = false;
  if (n1 > 0 && n2 > 0) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(" ");
  return palavras;
}

// Desafio 4
function concatName(contacts) {
  return contacts[contacts.length -1] + ', ' + contacts[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (ties + (wins * 3));
}

// Desafio 6
function highestCount(number) {
  let array = [number,number];
  
  let highNumber = 0;
  for (let indexA = 0; indexA < number.length; indexA += 1) {
    for (let indexB = 0; indexB < number.length; indexB =+ 1) {
      if (number[indexA] >= number[indexB]) {
        highNumber = number[indexA];
      }        
    }
  }
  return array;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result1;
  let result2;
  if (cat1 > mouse) {
    result1 = cat1 - mouse;
  } else {
    result1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    result2 = cat2 - mouse;
  } else {
    result2 = mouse - cat2;
  }

  if (result1 === result2) {
    return 'os gatos trombam e o rato foge';
  } else if (result1 < result2) {
    return 'cat1';
  } else {
    return 'cat2';
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
};
