// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height)) / 2;
  return (area);
}

// Desafio 3
function splitSentence(palavra) {
  let resultado = palavra.split(' ');
  return (resultado);
}

// Desafio 4
function concatName(name) {
  let pos = (name[name.length - 1]);
  let firstLast = `${pos}, ${name[0]}`;
  return (firstLast);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties * 1));
  return (points);
}

// Desafio 6
function highestCount(qtdLarger) {
  let num = qtdLarger;
  let high = 0;
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] > high) {
      high = num[i];
    }
  }
  let cont = 0;
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] === high) {
      cont += 1;
    }
  }
  return (cont);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse >= 0) && (cat1 >= 0) && (cat2 >= 0)) {
    let catDist1 = cat1 - mouse;
    let catDist2 = cat2 - mouse;
    //let mouseDist = ();
    if (catDist1 === catDist2) {
      mouseDist = console.log('os gatos trombam e o rato foge');
    } else if (catDist1 > catDist2) {
      mouseDist = console.log('cat2');
    } else {
      mouseDist = console.log('cat1');
    }
  } else {
    mouseDist = console.log('numero negativo');
  }
  return (mouseDist);
}
(catAndMouse(1, 5, 5));

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
