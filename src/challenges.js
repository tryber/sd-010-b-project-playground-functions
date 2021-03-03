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
  let highN = Math.max.apply(null, number);
  let x = 0;
  for (let index = 0; index < number.length; index +=1) {    
    if (highN == number[index]) {
      x = x + 1;
    }    
  }
  return x;
}
console.log (highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs (mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat1) > Math.abs (mouse - cat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log (catAndMouse(1, 0, 2));

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
