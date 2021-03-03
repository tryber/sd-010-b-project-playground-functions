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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(a) {
  let dado = [];
  for (let key in a){
    if (a[key] % 3 === 0 && a[key] % 5 === 0) {
      dado.push("fizzBuzz");
    } else if (a[key] % 3 === 0) {
      dado.push("fizz");
    } else if (a[key] % 5 === 0) {
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
    if (vogais.hasOwnProperty(key)) {
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
    if (vogais.hasOwnProperty(key)) {
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
