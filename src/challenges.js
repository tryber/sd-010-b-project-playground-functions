//dúvidas esclarecidas com o apoio dos plantões de Isaac e Gisele, e dos colegas participantes
//e pesquisas realizadas nos sites: Trybe (tutoriais), Alura, Devmedia, Developer Mozilla, Stackoverflow
// Sitepoint e Ricardo Reis

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
    if (Math.abs(catDist1) === Math.abs(catDist2)) {
      mouseDist = 'os gatos trombam e o rato foge';
    } else if (Math.abs(catDist1) > Math.abs(catDist2)) {
      mouseDist = 'cat2';
    } else {
      mouseDist = 'cat1';
    }
  } else {
    mouseDist = 'numero negativo';
  }
  return (mouseDist);
}

// Desafio 8
function fizzBuzz(text) {
  let words = text;
  // let result[];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] % 3 === 0 && words[i] % 5 === 0) {
      words[i] = 'fizzBuzz';
    } else if (words[i] % 3 === 0) {
      words[i] = ('fizz');
    } else if (words[i] % 5 === 0) {
      words[i] = 'buzz';
    } else {
      words[i] = 'bug!';
    }
  }
  return (words);
}

// Desafio 9
function encode(textLine) {
  let phrase = textLine.split('');
  let letters = ['a', 'e', 'i', 'o', 'u'];
  for (i = 0; i < phrase.length; i += 1) {
    for (l = 0; l < letters.length; l += 1) {
      if (phrase[i] === letters[l]) {
        phrase[i] = l + 1;
      }
    }
      phrase1 = phrase.join('');
    
  }
  return (phrase1);
}
console.log(encode('hi there!'));

function decode(textLine) {
  let phrase = textLine.split('');
  let letters = ['a', 'e', 'i', 'o', 'u'];
  for (i = 0; i < phrase.length; i += 1) {
    for (l = 0; l < letters.length; l += 1) {
      if ((parseInt(phrase[i]) === (l + 1))) {
        phrase[i] = letters[l];
      }
    }
    phrase1 = phrase.join('');
  }
  return (phrase1);
}
console.log(decode('h3 th2r2!'));

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
