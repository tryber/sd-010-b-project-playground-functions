// Desafio 1 esio-nascimento
function compareTrue(a, b) {
  let confirma = false;
  return a === true && b === true ? !confirma : confirma;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(a) {
  let dado = a.split(' ');
  return dado;
}

// Desafio 4
function concatName(a) {
  let dado = [];
  dado.push(a.pop());
  dado.push(a[0]);
  dado = dado.join(', ');
  return dado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * 3;
  return a + ties;
}

// Desafio 6
function highestCount(a) {
  let maior = Math.max.apply(null, a);
  let count = 0;
  let idx = a.indexOf(maior);
  while (idx !== -1) {
    count += 1;
    idx = a.indexOf(maior, idx + 1);
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pCat1 = Math.abs(cat1 - mouse);
  let pCat2 = Math.abs(cat2 - mouse);
  let dado;
  if (pCat1 === pCat2) {
    dado = 'os gatos trombam e o rato foge';
  } else if (pCat1 < pCat2) {
    dado = 'cat1';
  } else {
    dado = 'cat2';
  }
  return dado;
}

// Desafio 8
function fizzBuzz(a) {
  let dado = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 15 === 0) {
      dado.push("fizzBuzz");
    } else if (a[i] % 3 === 0) {
      dado.push("fizz");
    } else if (a[i] % 5 === 0) {
      dado.push("buzz");
    } else {
      dado.push("bug!")
    }
  }
  return dado;
}

// Desafio 9
function encode(encod) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key in vogais) {
    if (Object.prototype.hasOwnProperty.call(vogais, key)) {
      while (encod.includes(key)) {
        encod = encod.replace(key, vogais[key]);
      }
    }
  }
  return encod;
}
function decode(encod) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key in vogais) {
    if (Object.prototype.hasOwnProperty.call(vogais, key)) {
      while (encod.includes(vogais[key])) {
        encod = encod.replace(vogais[key], key);
      }
    }
  }
  return encod;
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
