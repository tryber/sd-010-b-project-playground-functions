// Desafio 1
let compareTrue = (x, y) => {
  return x && y;
}

// Desafio 2
let calcArea = (base, heigth) => {
  return (base * heigth) / 2;
}

// Desafio 3
let splitSentence = (phrase) => {
  return phrase.split(' ');
}

// Desafio 4
  let concatName = (names) => {
    return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
let footballPoints = (wins, ties) => {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount() {
  
}

// Desafio 7
let catAndMouse = (mouse, cat1, cat2) => {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position < cat2Position) {
    return 'cat1';
  } else if (cat1Position > cat2Position) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

  
// Desafio 8
let fizzBuzz = (arraynumbers) => {
  let result = [];
  let element = "";
  for (let value of arraynumbers) {
    if (value % 3 === 0) {
      element.push('fizz');
    } else if (value % 5 === 0) {
      element.push('buzz');
    } else if (value % 3 === 0 && value % 5 === 0) {
      element.push('fizzBuzz');
    } else {
      element.push('bug!');
    }
  }
  return result;
}   
 
// Desafio 9
function encode() {
  
}
function decode() {
  
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
