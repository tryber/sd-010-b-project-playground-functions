// Desafio 1
function compareTrue(b1, b2) {
  if (b1 && b2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  return (`${string[string.length - 1]}, ${string[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(count) {
  let maior = count[0];
  let contador = 0;
  for (let index = 0; index < count.length; index += 1) {
    if (maior < count[index]) {
      maior = count[index];
      contador = 1;
    } else if (maior === count[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  } if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(divisivel) {
  for (let porta = 0; porta < divisivel.length; porta += 1) {
    if (divisivel[porta] % 3 === 0 && divisivel[porta] % 5 === 0) {
      divisivel[porta] = 'fizzBuzz';
    } else if (divisivel[porta] % 3 === 0 && divisivel[porta] % 5 !== 0) {
      divisivel[porta] = 'fizz';
    } else if (divisivel[porta] % 3 !== 0 && divisivel[porta] % 5 === 0) {
      divisivel[porta] = 'buzz';
    } else {
      divisivel[porta] = 'bug!';
    }
  }
  return divisivel;
}

// Desafio 9
function encode(codigo) {
    let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  codigo = codigo.split('');
  for (let letraindex = 0; letraindex < codigo.length; letraindex += 1) {
    for (let key in vogais) {
      if (codigo[letraindex] === key) {
        codigo[letraindex] = vogais[key];
      }
    }
  }
  codigo = codigo.join('');
  return codigo;
}

function decode(codigo2) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  codigo2 = codigo2.split('');
  for (let letraindex = 0; letraindex < codigo2.length; letraindex += 1) {
    for (let key in vogais) {
      if (codigo2[letraindex] == vogais[key]) {
        codigo2[letraindex] = key;
      }
    }
  }
  codigo2 = codigo2.join('');
  return codigo2;
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
